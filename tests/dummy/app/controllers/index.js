import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  options = [
    'One & Two Family Buildings',
    'Multi-Family Walk-Up Buildings',
    'Multi-Family Elevator Buildings',
    'Mixed Residential & Commercial Buildings',
    'Commercial & Office Buildings',
    'Industrial & Manufacturing',
    'Transportation & Utility',
    'Public Facilities & Institutions',
    'Open Space & Outdoor Recreation',
    'Parking Facilities',
    'Vacant Land',
    'Other'
  ]
  selectedOption = this.options[0]

  landUses = [
    {name: 'One & Two Family Buildings'},
    {name: 'Multi-Family Walk-Up Buildings'},
    {name: 'Multi-Family Elevator Buildings'},
    {name: 'Mixed Residential & Commercial Buildings'},
    {name: 'Commercial & Office Buildings'},
    {name: 'Industrial & Manufacturing'},
    {name: 'Transportation & Utility'},
    {name: 'Public Facilities & Institutions'},
    {name: 'Open Space & Outdoor Recreation'},
    {name: 'Parking Facilities'},
    {name: 'Vacant Land'},
    {name: 'Other'}
  ]

  @action
  chooseOption(option) {
    this.set('selectedOption', option);
  }
}
