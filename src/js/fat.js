var MAIN = {
  unitSystem: 'metric',
  gender: 'woman',
  results: {
    weight: 0,
    height: 0,
    size1: 0,
    size2: 0,
    size3: 0
  },
  init: function() {
    $('.unit-system-imperial').css('display', 'none');
    
    $('.unit-switch').change(function() {
      if($(this).val() == 'metric')
      {
        $('.unit-system-imperial').css('display', 'none');
        $('.unit-system-metric').css('display', 'inline');
        MAIN.unitSystem = 'metric';
      }
      else
      {
        $('.unit-system-imperial').css('display', 'inline');
        $('.unit-system-metric').css('display', 'none');
        MAIN.unitSystem = 'imperial';
      }
    });
    
    $('.gender').change(function() {
      if($(this).val() == '1')
      {
        $('.for-woman').show();
        MAIN.gender = 'woman';
      }
      else
      {
        $('.for-woman').hide();
        MAIN.gender = 'man';
      }
    });
    
    $('input[name=calculate-form]').click(function() {
      if(MAIN.unitSystem == 'metric')
      {
        MAIN.results.weight = parseInt($('#weight').val());
        MAIN.results.height = parseInt($('#height').val());
        MAIN.results.size1 = parseInt($('#size1').val());
        MAIN.results.size2 = parseInt($('#size2').val());
        MAIN.results.size3 = parseInt($('#size3').val());
      }
      else
      {
        MAIN.results.weight = parseInt($('#weight').val());
        MAIN.results.height = parseInt($('#height1').val()) * 12 + (! parseInt($('#height2').val()) ? 0 : parseInt($('#height2').val()));
        MAIN.results.size1 = parseInt($('#size12').val());
        MAIN.results.size2 = parseInt($('#size22').val());
        MAIN.results.size3 = parseInt($('#size32').val());
      }
      
      if(! MAIN.results.weight)
      {
        alert('Podaj swoją wagę.');
        return false;
      }
      if(! MAIN.results.height)
      {
        alert('Podaj swój wzrost.');
        return false;
      }
      if(! MAIN.results.size1)
      {
        alert('Podaj swój obwód w pasie.');
        return false;
      }
      if(! MAIN.results.size2)
      {
        alert('Podaj swój obwód w szyi.');
        return false;
      }
      if(! MAIN.results.size3 && MAIN.gender == 'woman')
      {
        alert('Podaj swój obwód w biodrach.');
        return false;
      }
      
      MAIN.calculateResult();
      
      return false;
    });
  },
  calculateResult: function() {
    var hsel = 1;
    var wsel = 1;
    var wcsel = 1;
    var hcsel = 1;
    var ncsel = 1;
    var res2sel = 1;
    
    if(MAIN.unitSystem == 'metric')
    {
      hsel = 0.3937;
      wsel = 2.2046;
      wcsel = 0.3937;
      hcsel = 0.3937;
      ncsel = 0.3937; 
      res2sel = 2.2046;
    }
    
    if(MAIN.gender == 'woman')
    {
      var res   = 163.205 * Math.log(MAIN.results.size1 * wcsel + MAIN.results.size3 * hcsel - MAIN.results.size2 * ncsel) / Math.log(10) - 97.684 * Math.log(MAIN.results.height * hsel) / Math.log(10) - 78.387;
      var res2  = MAIN.results.weight * wsel * (100-res) * 0.01 / res2sel;
      
      $('#form-result-one').html(res.toFixed(1));
      $('#form-result-two').html(res2.toFixed(1));
    }
    else
    {
      var res   = 86.01 * Math.log(MAIN.results.size1 * wcsel - MAIN.results.size2 * ncsel) / Math.log(10) - 70.041 * Math.log(MAIN.results.height * hsel) / Math.log(10) + 36.76;
      var res2  = MAIN.results.weight * wsel * (100-res) * 0.01 / res2sel;
      
      $('#form-result-one').html(res.toFixed(1));
      $('#form-result-two').html(res2.toFixed(1));
    }
  }
};

$(document).ready(function() {
  MAIN.init();
});