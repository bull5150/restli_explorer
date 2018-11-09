package com.model.mapmarker.impl;
import com.linkedin.restli.server.annotations.RestLiCollection;
import com.linkedin.restli.server.resources.CollectionResourceTemplate;
import com.model.mapmarker.MapMarker;
import java.util.HashMap;
import java.util.Map;

@RestLiCollection(name = "getmarker", namespace = "com.model.mapmarker")
public class MapMarkerResource extends CollectionResourceTemplate<Long, MapMarker> {

  // In-memory store for the fortunes
  static Map<Long, String[]> markers = new HashMap<Long, String[]>();
  static {
    markers.put(1L, new String[] {"LinkedIn HQ", "37.423265", "-122.070669", "assets/media/linkedin-logo.png"});
    markers.put(2L, new String[] {"222 2nd St", "37.786358", "-122.398186", "assets/media/linkedin-logo.png"});
    markers.put(3L, new String[] {"LinkedIn Manhattan Office", "40.748384", "-73.985643", "assets/media/linkedin-logo.png"});
    markers.put(4L, new String[] {"Omaha Office", "41.270143", "-96.054927", "assets/media/linkedin-logo.png"});
    markers.put(5L, new String[] {"Parent Company", "47.642396", "-122.136942", "assets/media/microsoft-logo.png"});
  }

  @Override
  public MapMarker get(Long key) {
    // Retrieve the requested fortune
      String[] marker = markers.get(key);
      if (marker == null) {
        return new MapMarker().setName("No marker for that id: " + key);
      }
      else{
        MapMarker return_marker = new MapMarker();
        return_marker.setName(marker[0]);
        return_marker.setLatitude(marker[1]);
        return_marker.setLongitude(marker[2]);
        return_marker.setIcon(marker[3]);
        return return_marker;
      }
    }
  }