
import { JsonProvider } from 'leaflet-geosearch';

class MyProvider extends JsonProvider {
  endpoint({ query, type }) {
    // Result: https://example.com/api/search?q=some%20address&f=json
    return this.getUrl('https://example.com/api/search', {
      q: query,
      f: 'json'
    });
  }
  parse({ data }) {
    // Note that `data` is the raw result returned by the server. This
    // method should return data in the SearchResult format.
    return data.map((x) => ({
      x: data.x,
      y: data.y,
      label: data.label,
      bounds: data.bounds
    }));
  }
};
