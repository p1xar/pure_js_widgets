const Core = (function() {
  const modules = {}

  return {
    register: (moduleId, creator) => {
      modules[moduleId] = {
        creator: creator,
        instance: null
      }
    },
    start: (moduleId) => {
      modules[moduleId].instance = modules[moduleId].creator(new Sandbox(this));
      modules[moduleId].instance.init();
    },

    getModule: (moduleName) => {
      return modules[moduleName]
    }
  }
}())

