package com.model.mapmarker.impl;
import com.linkedin.restli.server.annotations.RestLiCollection;
import com.linkedin.restli.server.resources.CollectionResourceTemplate;
import com.model.mapmarker.MapMarker;
import java.util.HashMap;
import java.util.Map;

@RestLiCollection(name = "mapmarker", namespace = "com.model.mapmarker")
public class MapMarkerResource extends CollectionResourceTemplate<Long, MapMarker> {

  // In-memory store for the fortunes
  static Map<Long, String[]> markers = new HashMap<Long, String[]>();
  static {
    markers.put(1L, new String[] {"TD Ameritrade HQ", "95.55", "22.333"});
    markers.put(2L, new String[] {"Billy  Gumms", "22.22", "333.555"});
    markers.put(3L, new String[] {"Frank Footer", "333.5555", "111222.222"});
  }

  @Override
  public MapMarker get(Long key) {
    // Retrieve the requested fortune
      String[] marker = markers.get(key);
      if (marker == null) {
        return new MapMarker().setName("No marker for that id: " + key);
      }
      else{
        MapMarker blah = new MapMarker();
        blah.setName(marker[0]);
        blah.setLatitude(marker[1]);
        blah.setLongitude(marker[2]);
        return blah;
      }
    }
  }