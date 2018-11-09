
package com.model.mapmarker;

import java.util.List;
import javax.annotation.Generated;
import javax.annotation.Nonnull;
import com.linkedin.data.DataMap;
import com.linkedin.data.schema.PathSpec;
import com.linkedin.data.schema.RecordDataSchema;
import com.linkedin.data.template.DataTemplateUtil;
import com.linkedin.data.template.GetMode;
import com.linkedin.data.template.RecordTemplate;
import com.linkedin.data.template.SetMode;


/**
 * Generate a Map Marker
 * 
 */
@Generated(value = "com.linkedin.pegasus.generator.JavaCodeUtil", comments = "Rest.li Data Template. Generated from C:\\TDAware\\restli_explorer\\restli\\api\\src\\main\\pegasus\\com\\model\\mapmarker\\MapMarker.pdsc.", date = "Fri Nov 09 13:56:24 CST 2018")
public class MapMarker
    extends RecordTemplate
{

    private final static MapMarker.Fields _fields = new MapMarker.Fields();
    private final static RecordDataSchema SCHEMA = ((RecordDataSchema) DataTemplateUtil.parseSchema("{\"type\":\"record\",\"name\":\"MapMarker\",\"namespace\":\"com.model.mapmarker\",\"doc\":\"Generate a Map Marker\",\"fields\":[{\"name\":\"Name\",\"type\":\"string\",\"doc\":\"Marker Name\"},{\"name\":\"Latitude\",\"type\":\"string\",\"doc\":\"Latitude Postion\"},{\"name\":\"Longitude\",\"type\":\"string\",\"doc\":\"Longitude Postion\"},{\"name\":\"Icon\",\"type\":\"string\",\"doc\":\"Marker Icon\"}]}"));
    private final static RecordDataSchema.Field FIELD_Name = SCHEMA.getField("Name");
    private final static RecordDataSchema.Field FIELD_Latitude = SCHEMA.getField("Latitude");
    private final static RecordDataSchema.Field FIELD_Longitude = SCHEMA.getField("Longitude");
    private final static RecordDataSchema.Field FIELD_Icon = SCHEMA.getField("Icon");

    public MapMarker() {
        super(new DataMap(), SCHEMA);
    }

    public MapMarker(DataMap data) {
        super(data, SCHEMA);
    }

    public static MapMarker.Fields fields() {
        return _fields;
    }

    /**
     * Existence checker for Name
     * 
     * @see MapMarker.Fields#Name
     */
    public boolean hasName() {
        return contains(FIELD_Name);
    }

    /**
     * Remover for Name
     * 
     * @see MapMarker.Fields#Name
     */
    public void removeName() {
        remove(FIELD_Name);
    }

    /**
     * Getter for Name
     * 
     * @see MapMarker.Fields#Name
     */
    public String getName(GetMode mode) {
        return obtainDirect(FIELD_Name, String.class, mode);
    }

    /**
     * Getter for Name
     * 
     * @return
     *     Required field. Could be null for partial record.
     * @see MapMarker.Fields#Name
     */
    @Nonnull
    public String getName() {
        return obtainDirect(FIELD_Name, String.class, GetMode.STRICT);
    }

    /**
     * Setter for Name
     * 
     * @see MapMarker.Fields#Name
     */
    public MapMarker setName(String value, SetMode mode) {
        putDirect(FIELD_Name, String.class, String.class, value, mode);
        return this;
    }

    /**
     * Setter for Name
     * 
     * @param value
     *     Must not be null. For more control, use setters with mode instead.
     * @see MapMarker.Fields#Name
     */
    public MapMarker setName(
        @Nonnull
        String value) {
        putDirect(FIELD_Name, String.class, String.class, value, SetMode.DISALLOW_NULL);
        return this;
    }

    /**
     * Existence checker for Latitude
     * 
     * @see MapMarker.Fields#Latitude
     */
    public boolean hasLatitude() {
        return contains(FIELD_Latitude);
    }

    /**
     * Remover for Latitude
     * 
     * @see MapMarker.Fields#Latitude
     */
    public void removeLatitude() {
        remove(FIELD_Latitude);
    }

    /**
     * Getter for Latitude
     * 
     * @see MapMarker.Fields#Latitude
     */
    public String getLatitude(GetMode mode) {
        return obtainDirect(FIELD_Latitude, String.class, mode);
    }

    /**
     * Getter for Latitude
     * 
     * @return
     *     Required field. Could be null for partial record.
     * @see MapMarker.Fields#Latitude
     */
    @Nonnull
    public String getLatitude() {
        return obtainDirect(FIELD_Latitude, String.class, GetMode.STRICT);
    }

    /**
     * Setter for Latitude
     * 
     * @see MapMarker.Fields#Latitude
     */
    public MapMarker setLatitude(String value, SetMode mode) {
        putDirect(FIELD_Latitude, String.class, String.class, value, mode);
        return this;
    }

    /**
     * Setter for Latitude
     * 
     * @param value
     *     Must not be null. For more control, use setters with mode instead.
     * @see MapMarker.Fields#Latitude
     */
    public MapMarker setLatitude(
        @Nonnull
        String value) {
        putDirect(FIELD_Latitude, String.class, String.class, value, SetMode.DISALLOW_NULL);
        return this;
    }

    /**
     * Existence checker for Longitude
     * 
     * @see MapMarker.Fields#Longitude
     */
    public boolean hasLongitude() {
        return contains(FIELD_Longitude);
    }

    /**
     * Remover for Longitude
     * 
     * @see MapMarker.Fields#Longitude
     */
    public void removeLongitude() {
        remove(FIELD_Longitude);
    }

    /**
     * Getter for Longitude
     * 
     * @see MapMarker.Fields#Longitude
     */
    public String getLongitude(GetMode mode) {
        return obtainDirect(FIELD_Longitude, String.class, mode);
    }

    /**
     * Getter for Longitude
     * 
     * @return
     *     Required field. Could be null for partial record.
     * @see MapMarker.Fields#Longitude
     */
    @Nonnull
    public String getLongitude() {
        return obtainDirect(FIELD_Longitude, String.class, GetMode.STRICT);
    }

    /**
     * Setter for Longitude
     * 
     * @see MapMarker.Fields#Longitude
     */
    public MapMarker setLongitude(String value, SetMode mode) {
        putDirect(FIELD_Longitude, String.class, String.class, value, mode);
        return this;
    }

    /**
     * Setter for Longitude
     * 
     * @param value
     *     Must not be null. For more control, use setters with mode instead.
     * @see MapMarker.Fields#Longitude
     */
    public MapMarker setLongitude(
        @Nonnull
        String value) {
        putDirect(FIELD_Longitude, String.class, String.class, value, SetMode.DISALLOW_NULL);
        return this;
    }

    /**
     * Existence checker for Icon
     * 
     * @see MapMarker.Fields#Icon
     */
    public boolean hasIcon() {
        return contains(FIELD_Icon);
    }

    /**
     * Remover for Icon
     * 
     * @see MapMarker.Fields#Icon
     */
    public void removeIcon() {
        remove(FIELD_Icon);
    }

    /**
     * Getter for Icon
     * 
     * @see MapMarker.Fields#Icon
     */
    public String getIcon(GetMode mode) {
        return obtainDirect(FIELD_Icon, String.class, mode);
    }

    /**
     * Getter for Icon
     * 
     * @return
     *     Required field. Could be null for partial record.
     * @see MapMarker.Fields#Icon
     */
    @Nonnull
    public String getIcon() {
        return obtainDirect(FIELD_Icon, String.class, GetMode.STRICT);
    }

    /**
     * Setter for Icon
     * 
     * @see MapMarker.Fields#Icon
     */
    public MapMarker setIcon(String value, SetMode mode) {
        putDirect(FIELD_Icon, String.class, String.class, value, mode);
        return this;
    }

    /**
     * Setter for Icon
     * 
     * @param value
     *     Must not be null. For more control, use setters with mode instead.
     * @see MapMarker.Fields#Icon
     */
    public MapMarker setIcon(
        @Nonnull
        String value) {
        putDirect(FIELD_Icon, String.class, String.class, value, SetMode.DISALLOW_NULL);
        return this;
    }

    @Override
    public MapMarker clone()
        throws CloneNotSupportedException
    {
        return ((MapMarker) super.clone());
    }

    @Override
    public MapMarker copy()
        throws CloneNotSupportedException
    {
        return ((MapMarker) super.copy());
    }

    public static class Fields
        extends PathSpec
    {


        public Fields(List<String> path, String name) {
            super(path, name);
        }

        public Fields() {
            super();
        }

        /**
         * Marker Name
         * 
         */
        public PathSpec Name() {
            return new PathSpec(getPathComponents(), "Name");
        }

        /**
         * Latitude Postion
         * 
         */
        public PathSpec Latitude() {
            return new PathSpec(getPathComponents(), "Latitude");
        }

        /**
         * Longitude Postion
         * 
         */
        public PathSpec Longitude() {
            return new PathSpec(getPathComponents(), "Longitude");
        }

        /**
         * Marker Icon
         * 
         */
        public PathSpec Icon() {
            return new PathSpec(getPathComponents(), "Icon");
        }

    }

}
