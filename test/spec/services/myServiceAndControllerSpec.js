fdescribe('Users factory', function() {
  var Users, $scope;
  var userList = [
    {
      id: 2,
      name: 'Damian'
    }
  ];

  beforeEach(angular.mock.module('Users'));

  beforeEach(inject(function($rootScope, _Users_, $controller) {
    $scope = $rootScope.$new();
    Users = _Users_;
    $controller('ctrl1', {$scope: $scope});
  }));

  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  describe('.all()', function() {
    it('should exist', function() {
      expect(Users.getNames).toBeDefined();
    });

    it('should return a hard-coded list of users', function() {
      expect(Users.getNames()[0].name).toEqual('Damian');
    });
  });

  describe('.setName()', function() {
    it('should exist', function() {
      expect(Users.setName).toBeDefined();
    });

    it('should add a name', function() {

      Users.setName('Renell');
      expect(Users.getNames()[1].name).toEqual('Renell');
    });
  });
});
