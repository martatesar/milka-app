const testComponent = {
  name: "test-component",
  val: {
    init: function () {
      // Set the initial rotation of the object
      this.rotation = 0;
    },

    tick: function (time, timeDelta) {
      // Calculate the rotation increment based on the time delta
      var rotationIncrement = 0.001 * timeDelta;

      // Update the rotation of the object
      this.rotation += rotationIncrement;

      // Apply the rotation to the object
      this.el.object3D.rotation.y = this.rotation;
    },
  },
};

export default testComponent;
