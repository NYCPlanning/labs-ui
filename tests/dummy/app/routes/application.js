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
      ],
    });

    const layerGroupsObject = layerGroups.reduce(
      (accumulator, current) => {
        accumulator[current.get('id')] = current;
        return accumulator;
      },
      {},
    );

    return {
      layerGroups,
      layerGroupsObject,
    }
  }
});
