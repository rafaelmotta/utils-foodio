let pusher = () => {
  let settings = {
    key: null,
    authEndpoint: '/pusher/auth',
    authTransport: 'ajax'
  };

  let self = this;

  self.setKey = (value) => {
    settings.key = value;
  };

  self.setAuthEndpoint = (authEndpoint) => {
    settings.authEndpoint = authEndpoint;
  };

  self.setAuthTransport = (authTransport) => {
    if(authTransport !== 'ajax' && authTransport !== 'jsonp') {
      authTransport = 'ajax';
    }

    settings.authTransport = authTransport;
  };

  self.$get = ["$localStorage", ($localStorage) => {
    return {
      subscribe: (channel) => {
        if(!settings.key) {
          throw new Error('A key must be setted to initialize pusher');
        }

        let costumer = $localStorage['currentCostumer'];
        let employee = $localStorage['currentEmployee'];

        let headers = {
          'X-Employee-Email': employee ? employee.email : null,
          'X-Employee-Token': employee ? employee.authentication_token : null,
          'X-Costumer-Email': costumer ? costumer.email : null,
          'X-Costumer-Token': costumer ? costumer.authentication_token : null,
        };

        let pusher = new Pusher(settings.key, { authEndpoint: settings.authEndpoint, auth: { headers: headers } });
        return pusher.subscribe(channel);
      }
    }
  }];
};

angular.module('foodbox.utils').provider('pusher', pusher);