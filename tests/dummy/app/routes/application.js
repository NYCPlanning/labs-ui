import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const layerGroups = await this.store.query('layer-group', {
      'layer-groups': [

        // { id: 'amendments', visible: true },
        { id: 'amendments-pending', visible: true },
        // { id: 'appendixj-designated-mdistricts', visible: true },
        // { id: 'arterials', visible: true },
        // { id: 'assembly-districts', visible: true },
        { id: 'boroughs', visible: true },
        // { id: 'building-footprints', visible: true },
        // { id: 'business-improvement-districts', visible: true },
        { id: 'citymap', visible: true },
        // { id: 'coastal-zone-boundary', visible: true },
        // { id: 'commercial-overlays', visible: true },
        // { id: 'community-districts', visible: true },
        // { id: 'e-designations', visible: true },
        // { id: 'fresh', visible: true },
        { id: 'floodplain-efirm2007', visible: true },
        // { id: 'floodplain-pfirm2015', visible: true },
        // { id: 'historic-districts', visible: true },
        // { id: 'inclusionary-housing', visible: true },
        // { id: 'industrial-business-zones', visible: true },
        // { id: 'landmarks', visible: true },
        // { id: 'limited-height-districts', visible: true },
        // { id: 'low-density-growth-mgmt-areas', visible: true },
        // { id: 'mandatory-inclusionary-housing', visible: true },
        { id: 'name-changes', visible: true },
        // { id: 'neighborhood-tabulation-areas', visible: true },
        // { id: 'ny-senate-districts', visible: true },
        // { id: 'nyc-council-districts', visible: true },
        // { id: 'paper-streets', visible: true },
        { id: 'pierhead-bulkhead-lines', visible: true },
        // { id: 'sidewalk-cafes', visible: true },
        { id: 'stair-streets', visible: true },
        // { id: 'tax-lots', visible: true },
        // { id: 'three-d-buildings', visible: true },
        // { id: 'transit-zones', visible: true },
        // { id: 'waterfront-access-plan', visible: true },
        // { id: 'zoning-map-amendments', visible: true },
        // { id: 'zoning-map-amendments-pending', visible: true },

      ],
    });

    const layerGroupsArray = layerGroups.toArray().map(d => d.toJSON())


    const exampleIcon = {
      "type": "rectangle",
      "layers": [{
        "fill":"rgba(230, 50, 50, 0.2)",
        "stroke":"rgba(230, 50, 50, 0.6)",
        "stroke-dasharray":"1"
      }]
    };

    const exampleItem = {
      "label":"Legend Item Label",
      "tooltip": "This is the legend item tooltip.",
      "icon": {
        "type": "line",
        "layers": [
          {
            "fill":"none",
            "stroke":"rgba(230, 50, 50, 0.3)",
            "stroke-width": 4
          },
          {
            "fill":"none",
            "stroke":"rgba(150, 50, 50, 1)"
          }
        ]
      }
    };

    return {
      layerGroups,
      layerGroupsArray,
      exampleIcon,
      exampleItem,
    }
  }
});
