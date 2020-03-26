import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    // const layerGroups = await this.store.query('layer-group', {
    //   'layer-groups': [
    //     { id: 'amendments-pending', visible: true },
    //     { id: 'boroughs', visible: true },
    //     { id: 'citymap', visible: true },
    //     { id: 'floodplain-efirm2007', visible: true },
    //     { id: 'name-changes', visible: true },
    //     { id: 'pierhead-bulkhead-lines', visible: true },
    //     { id: 'stair-streets', visible: true },
    //   ],
    // });
    //
    // const layerGroupsArray = layerGroups.toArray().map(d => d.serialize());

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
      // layerGroups,
      // layerGroupsArray,
      exampleIcon,
      exampleItem,
    }
  }
});
