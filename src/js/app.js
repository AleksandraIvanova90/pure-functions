// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function lifeIndicator(indicators) {
    if (indicators > 50) {
        return 'healthy' 
    } else if (indicators >= 15) {
        return 'wounded'
    } else {
        return 'critical'
    }
};