import { DARK, LIGHT } from '../Constants/colors';

export const get_color = ({ status, profit, is_dark_theme }) => {
    const colors = is_dark_theme ? DARK : LIGHT;

    let color = colors[status || 'open'];
    if (status === 'open' && profit) {
        color = colors[profit > 0 ? 'won' : 'lost'];
    }
    
    return color;
};