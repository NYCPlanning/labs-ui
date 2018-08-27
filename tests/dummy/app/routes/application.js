import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const layerGroups = await this.store.query('layer-group', {
      'layer-groups': [
        { id: 'citymap', visible: true },
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
