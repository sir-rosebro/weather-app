import DomUtil from "./domUtil.js";
import WeatherWrapper from './weatherWrapper.js';
import StatsWrapper from './statsWrapper.js';
class WeatherComponent {
    static render(parentElement, data, systemUsed) {
       const el = DomUtil.createElement('div', {class:'wrapper'});
       parentElement.appendChild(el);

       WeatherWrapper.render(el, data, systemUsed);
       StatsWrapper.render(el, data, systemUsed);
    }
}
export default WeatherComponent;