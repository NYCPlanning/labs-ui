import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const layerGroups = await this.store.query('layer-group', {
      'layer-groups': [
        { id: 'citymap', visible: true },
        { id: 'pierhead-bulkhead-lines', visible: true },
        { id: 'community-districts', visible: true },
        { id: 'floodplain-pfirm2015', visible: true },
        { id: 'zoning-map-amendments', visible: true },
        { id: 'amendments', visible: true },
        { id: 'zoning-map-amendments-pending', visible: true },
        { id: 'tax-lots', visible: true },
        { id: 'three-d-buildings', visible: true },
        { id: 'transit-zones', visible: true },
        { id: 'waterfront-access-plan', visible: true },
        { id: 'stair-streets', visible: true },
      ],
    });

    const layerGroupsArray = layerGroups.toArray().map(d => d.toJSON())

    return {
      layerGroups,
      layerGroupsArray,
    }
  }
});
