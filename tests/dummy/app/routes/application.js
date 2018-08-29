import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const layerGroups = await this.store.query('layer-group', {
      'layer-groups': [
        { id: 'citymap', visible: true },
        { id: 'pierhead-bulkhead-lines', visible: true },
        { id: 'community-districts', visible: true },
        { id: 'floodplain-pfirm2015', visible: true },
        { id: 'floodplain-efirm2007', visible: true },
        { id: 'zoning-map-amendments', visible: true },
        { id: 'amendments', visible: true },
        { id: 'zoning-map-amendments-pending', visible: true },
        { id: 'tax-lots', visible: true },
        { id: 'three-d-buildings', visible: true },
        { id: 'transit-zones', visible: true },
        { id: 'waterfront-access-plan', visible: true },
        { id: 'stair-streets', visible: true },
        { id: 'amendments-pending', visible: true },
        { id: 'appendixj-designated-mdistricts', visible: true },
        { id: 'arterials', visible: true },
        { id: 'assembly-districts', visible: true },
        { id: 'boroughs', visible: true },
        { id: 'building-footprints', visible: true },
        { id: 'business-improvement-districts', visible: true },
        { id: 'coastal-zone-boundary', visible: true },
        { id: 'commercial-overlays', visible: true },
        { id: 'e-designations', visible: true },
        { id: 'fresh', visible: true },
        { id: 'historic-districts', visible: true },
        { id: 'inclusionary-housing', visible: true },
        { id: 'industrial-business-zones', visible: true },
        { id: 'landmarks', visible: true },
      ],
    });

    const layerGroupsArray = layerGroups.toArray().map(d => d.toJSON())

    return {
      layerGroups,
      layerGroupsArray,
    }
  }
});
