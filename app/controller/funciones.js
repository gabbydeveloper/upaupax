/*
 * File: app/controller/funciones.js
 *
 * This file was generated by Sencha Architect version 4.2.9.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.3.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.3.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Upa_Upa.controller.funciones', {
  extend: 'Ext.Base',

  singleton: true,

  showWin: function(idWin, params) {
    let win = Ext.getCmp(idWin);
    if (win === null || typeof(win) === 'undefined'){
      win = Ext.create('Upa_Upa.view.' + idWin);
      this.setWinParams(win, params);
      win.setPosition(10, 90);
      win.show();
    }
    else{
      this.setWinParams(win, params);
      win.fireEvent('afterrender', win);
    }

    win.toFront(true);
  },

  setWinParams: function(win, params) {
    if(params !== '' && params !== null && typeof(params) !== 'undefined')
    {
      Object.getOwnPropertyNames(params).forEach(function(val, idx, array){
        win[val] = params[val];
      });
    }
  }

});