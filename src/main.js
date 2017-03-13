import { PLATFORM } from 'aurelia-framework';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    return aurelia.start().then(a => { 
        a.setRoot(PLATFORM.moduleName('app'));
    });
}