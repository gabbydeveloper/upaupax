/*
 * File: app/model/AplicacionesModel.js
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

Ext.define('Upa_Upa.model.AplicacionesModel', {
  extend: 'Ext.data.Model',

  requires: [
    'Ext.data.field.Field'
  ],

  idProperty: 'id_aplicacion',

  fields: [
    {
      name: 'id_aplicacion'
    },
    {
      name: 'descripcion_aplicacion'
    },
    {
      name: 'estado_aplicacion'
    },
    {
      name: 'estado_bdd_aplicacion'
    },
    {
      name: 'directorio_local'
    },
    {
      name: 'id_dominio'
    },
    {
      name: 'bdd_aplicacion'
    },
    {
      name: 'ver_aplicacion'
    }
  ]
});