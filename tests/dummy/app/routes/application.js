import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
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

    const exampleItems = [ exampleItem, exampleItem ]

    const exampleLine = {
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
    };

    const exampleRectangle = {
      "type": "rectangle",
      "layers": [
        {
          "fill":"none",
          "stroke":"rgba(50, 150, 50, 1)",
          "stroke-width": 3
        }
      ]
    };

    const exampleCircle = {
      "type": "fa-icon",
      "layers": [
        {
          "fa-icon": "circle",
          "color": "rgba(100, 80, 255, 0.5)"
        }
      ]
    };

    return {
      exampleIcon,
      exampleItem,
      exampleItems,
      exampleLine,
      exampleRectangle,
      exampleCircle,
    }
  }
});
