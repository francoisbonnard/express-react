try {
    nodes.traverse(function (object) {
       if (object.isMesh) {
          console.log(object)}
      //    object.material.color.set(0xff0000);
      //    object.material.transparent = true;
      //    object.material.opacity = 0.5;
      //  }
     });} catch (error) {
      console.error(error)
     }