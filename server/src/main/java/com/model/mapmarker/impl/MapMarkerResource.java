package com.model.mapmarker.impl;
import com.linkedin.restli.server.annotations.RestLiCollection;
import com.linkedin.restli.server.resources.CollectionResourceTemplate;
import com.model.mapmarker.MapMarker;
import java.util.HashMap;
import java.util.Map;

@RestLiCollection(name = "mapmarker", namespace = "com.model.mapmarker")
public class MapMarkerResource extends CollectionResourceTemplate<Long, MapMarker> {

  // In-memory store for the fortunes
  static Map<Long, String, String, String> markers = new HashMap<Long, String, String, String>();
  static {
    markers.put(1L, "here", "45.2222", "-45.3333");
    markers.put(2L, "There's no time like the present." "", "");
    markers.put(3L, "Don't worry, be happy.", "", "");
  }

  @Override
  public MapMarker get(Long key) {
    // Retrieve the requested fortune
    String markers = markers.get(key);
    if (marker == null) {
      marker = "No marker for that id: " + key;
    }

    // return an object that represents the fortune cookie
    return new MapMarker().setMapMarker(mapmarker);
  }
}