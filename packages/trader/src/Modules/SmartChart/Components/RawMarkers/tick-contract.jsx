import RawMarkerMaker    from './Helpers/raw-marker-maker.jsx';
import Svg2Canvas        from './Helpers/svg2canvas';
import { get_color }     from './Helpers/colors';
import { shadowed_text } from './Helpers/text';
import {
    draw_vertical_labelled_line,
    draw_barrier_line_to_icon,
    draw_barrier_line,
    draw_line,
}                        from './Helpers/lines';
import {
    calc_scale,
    calc_opacity,
}                        from './Helpers/calculations';
import * as ICONS        from '../icons';

const TickContract = RawMarkerMaker(({
    ctx: context,
    points: [start, reset_time, ...ticks],
    prices: [barrier, entry_tick_top], // TODO: support two barrier contracts
    is_last_contract,
    is_dark_theme,
    granularity,
    contract_info: {
        // contract_type,
        // exit_tick_time,
        status,
        profit,
        is_sold,
        // tick_stream,
        tick_count,
    },
}) => {
    /** @type {CanvasRenderingContext2D} */
    const ctx = context;

    const foreground_color = `${get_color({ is_dark_theme, status: 'fg' })}${is_last_contract ? '' : '66'}`;
    const background_color = get_color({ is_dark_theme, status: 'bg' });
    const scale = calc_scale(start.zoom);
    const canvas_height = (ctx.canvas.height / window.devicePixelRatio);

    ctx.save();
    ctx.strokeStyle = foreground_color;
    ctx.fillStyle = background_color;

    if (barrier) {
        barrier = Math.min(Math.max(barrier, 2), canvas_height - 32); // eslint-disable-line
    }

    if (!ticks.length || !barrier) {
        ctx.restore();
        return;
    }

    const exit = ticks[ticks.length - 1];
    const entry = ticks[0];
    const opacity = is_sold ? calc_opacity(start.left, exit.left) : '';
    const color_based_on_status = `${get_color({ status, is_dark_theme, profit })}${is_last_contract ? '' : '66'}`;

    const has_reset_time = reset_time && reset_time.epoch;
    const should_draw_vertical_line = is_last_contract && !is_sold;
    if (should_draw_vertical_line) {
        if (start.visible) {
            draw_vertical_labelled_line({
                ctx,
                text    : 'Buy\nTime',
                position: {
                    zoom: start.zoom,
                    left: start.left,
                    top : canvas_height - 50,
                },
                line_style: 'dashed',
                icon      : ICONS.BUY_SELL.with_color_on_specific_paths({
                    0: { fill: background_color },
                    1: { fill: foreground_color },
                }),
            });

        }
        if (has_reset_time) {
            draw_vertical_labelled_line({
                ctx,
                text    : 'Reset\nTime',
                position: {
                    zoom: reset_time.zoom,
                    left: reset_time.left,
                    top : canvas_height - 50,
                },
                line_style: 'dashed',
                icon      : ICONS.RESET.with_color(foreground_color, background_color),
            });
        }
        if (exit.visible && tick_count === (ticks.length - 1)) {
            ctx.strokeStyle = color_based_on_status;
            draw_vertical_labelled_line({
                ctx,
                text    : 'Sell\nTime',
                position: {
                    zoom: exit.zoom,
                    left: exit.left,
                    top : canvas_height - 50,
                },
                line_style: 'solid',
                icon      : ICONS.BUY_SELL.with_color_on_specific_paths({
                    0: { fill: background_color },
                    1: { fill: color_based_on_status },
                }),
            });
        }
    }

    const is_reset_barrier_expired = has_reset_time && entry_tick_top !== barrier;

    // barrier line
    ctx.fillStyle = background_color;
    if (is_reset_barrier_expired) {
        ctx.strokeStyle = foreground_color;
        draw_barrier_line({ ctx, start, exit: reset_time, barrier: entry_tick_top, line_style: 'dashed' });
        
        draw_line({
            ctx,
            start     : { left: reset_time.left, top: entry_tick_top },
            end       : { left: reset_time.left, top: barrier },
            line_style: 'dashed',
        });

        ctx.strokeStyle = color_based_on_status;
        draw_barrier_line({ ctx, start: reset_time, exit, barrier });
    } else {
        ctx.strokeStyle = color_based_on_status;
        draw_barrier_line({ ctx, start, exit: entry, barrier, line_style: 'dashed' });
        draw_barrier_line({ ctx, start: entry, exit, barrier, line_style: 'solid' });
    }

    // ticks for last contract
    if (is_last_contract && granularity === 0 && !is_sold) {
        ticks
            .filter(tick => tick.visible)
            .forEach(tick => {
                const clr = tick === exit ? foreground_color
                    : get_color({ status: 'fg', is_dark_theme });
                ctx.fillStyle = clr + opacity;
                ctx.beginPath();
                ctx.arc(tick.left - 1 * scale, tick.top, 1.5 * scale, 0, Math.PI * 2);
                ctx.fill();
            });
        ctx.fillStyle = foreground_color;
    }
    // entry markers
    if (granularity === 0 && entry && entry.visible) {
        Svg2Canvas.render({
            ctx,
            position: entry,
            icon    : ICONS.ENTRY_SPOT.with_color_on_specific_paths({
                0: { fill: background_color },
                1: { fill: is_reset_barrier_expired ? foreground_color : color_based_on_status },
            }),
        });
    }
    // count down
    if (start.visible && !is_sold) {
        shadowed_text({
            ctx,
            scale,
            is_dark_theme,
            text: `${ticks.length - 1}/${tick_count}`,
            left: start.left,
            top : start.top + 5,
        });
    }
    // start-time marker
    if (start.visible) {
        // Draw dot at end of barrier
        ctx.beginPath();
        ctx.arc(start.left - 1 * scale, barrier.top - 9 * scale, 3 * scale, 0, Math.PI * 2);
        ctx.fill();
    }

    // status marker
    if (exit.visible && is_sold) {
        // Draw a line from barrier to icon.
        const icon = ICONS.END.with_color_on_specific_paths({
            0: { fill: background_color + (is_sold ? opacity : '') },
            1: { fill: color_based_on_status },
        });

        ctx.strokeStyle = color_based_on_status;
        draw_barrier_line_to_icon({ ctx, exit, barrier, icon });
    }
    ctx.restore();
});

export default TickContract;