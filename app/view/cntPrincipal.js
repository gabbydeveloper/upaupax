/*
 * File: app/view/cntPrincipal.js
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

Ext.define('Upa_Upa.view.cntPrincipal', {
  extend: 'Ext.container.Container',
  alias: 'widget.cntPrincipal',

  requires: [
    'Upa_Upa.view.cntPrincipalViewModel',
    'Upa_Upa.view.cntPrincipalViewController',
    'Ext.tab.Panel',
    'Ext.tab.Tab',
    'Ext.grid.Panel',
    'Ext.toolbar.Toolbar',
    'Ext.form.field.ComboBox',
    'Ext.grid.plugin.CellEditing',
    'Ext.form.field.Hidden',
    'Ext.form.Panel',
    'Ext.form.FieldSet',
    'Ext.form.field.File',
    'Ext.form.FieldContainer',
    'Ext.grid.column.Number',
    'Ext.view.Table',
    'Ext.form.field.TextArea'
  ],

  controller: 'cntprincipal',
  viewModel: {
    type: 'cntprincipal'
  },
  height: 733,
  id: 'cntPrincipal',
  width: 1122,
  layout: 'fit',

  items: [
    {
      xtype: 'tabpanel',
      activeTab: 0,
      items: [
        {
          xtype: 'panel',
          layout: 'fit',
          title: 'Upa Upa',
          items: [
            {
              xtype: 'panel',
              layout: 'border',
              items: [
                {
                  xtype: 'panel',
                  flex: 0.8,
                  region: 'west',
                  width: 150,
                  layout: {
                    type: 'vbox',
                    align: 'stretch'
                  },
                  items: [
                    {
                      xtype: 'gridpanel',
                      frame: true,
                      height: 234,
                      id: 'grdDominios',
                      columnLines: true,
                      forceFit: true,
                      store: 'DominiosStore',
                      dockedItems: [
                        {
                          xtype: 'toolbar',
                          dock: 'top',
                          items: [
                            {
                              xtype: 'button',
                              iconCls: 'x-fa fa-plus-square',
                              text: 'Insertar',
                              listeners: {
                                click: 'onBtnInsertarDomClick'
                              }
                            },
                            {
                              xtype: 'button',
                              iconCls: 'x-fa fa-edit',
                              text: 'Modificar',
                              listeners: {
                                click: 'onBtnModificarDomClick'
                              }
                            }
                          ]
                        }
                      ],
                      columns: [
                        {
                          xtype: 'gridcolumn',
                          hidden: true,
                          dataIndex: 'id_dominio',
                          text: 'Id. Dominio'
                        },
                        {
                          xtype: 'gridcolumn',
                          dataIndex: 'descripcion_dominio',
                          text: 'Dominio'
                        },
                        {
                          xtype: 'gridcolumn',
                          renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                            if(value === 'A')
                            return 'Activo';
                            else
                            return '<span style="color:#FF0000">Inactivo</span>';
                          },
                          dataIndex: 'estado_dominio',
                          text: 'Estado',
                          editor: {
                            xtype: 'combobox',
                            store: [
                              [
                                'A',
                                'Activo'
                              ],
                              [
                                'I',
                                'Inactivo'
                              ]
                            ]
                          }
                        }
                      ],
                      listeners: {
                        rowclick: 'onGrdDominiosRowClick'
                      },
                      plugins: [
                        {
                          ptype: 'cellediting',
                          listeners: {
                            edit: 'onCellEditingEdit2'
                          }
                        }
                      ]
                    },
                    {
                      xtype: 'gridpanel',
                      flex: 1,
                      frame: true,
                      id: 'grdAplicaciones',
                      columnLines: true,
                      forceFit: true,
                      store: 'AplicacionesStore',
                      dockedItems: [
                        {
                          xtype: 'toolbar',
                          dock: 'top',
                          items: [
                            {
                              xtype: 'button',
                              iconCls: 'x-fa fa-plus-square',
                              text: 'Insertar',
                              listeners: {
                                click: 'onBtnInsertarAppClick'
                              }
                            },
                            {
                              xtype: 'hiddenfield',
                              id: 'txtGrdAplicacionesDom'
                            }
                          ]
                        }
                      ],
                      columns: [
                        {
                          xtype: 'gridcolumn',
                          dataIndex: 'descripcion_aplicacion',
                          text: 'Aplicación',
                          editor: {
                            xtype: 'textfield'
                          }
                        },
                        {
                          xtype: 'gridcolumn',
                          renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                            if(value === 'A')
                            return 'Activo';
                            else
                            return '<span style="color:#FF0000">Inactivo</span>';
                          },
                          dataIndex: 'estado_aplicacion',
                          text: 'Estado',
                          editor: {
                            xtype: 'combobox',
                            displayField: 'nombre',
                            store: [
                              {
                                codigo: 'A',
                                nombre: 'Activo'
                              },
                              {
                                codigo: 'I',
                                nombre: 'Inactivo'
                              }
                            ],
                            valueField: 'codigo'
                          }
                        },
                        {
                          xtype: 'gridcolumn',
                          dataIndex: 'directorio_local',
                          text: 'Directorio local',
                          editor: {
                            xtype: 'textfield'
                          }
                        }
                      ],
                      plugins: [
                        {
                          ptype: 'cellediting',
                          listeners: {
                            edit: 'onCellEditingEdit'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  xtype: 'panel',
                  flex: 1,
                  region: 'center',
                  layout: {
                    type: 'vbox',
                    align: 'stretch'
                  },
                  items: [
                    {
                      xtype: 'form',
                      frame: true,
                      id: 'frmGeneral',
                      bodyPadding: 5,
                      fieldDefaults: {
                        labelWidth: 120,
                        labelAlign: 'right',
                        msgTarget: 'side',
                        anchor: '100%',
                        margin: '0 0 5 0'
                      },
                      dockedItems: [
                        {
                          xtype: 'toolbar',
                          dock: 'top',
                          items: [
                            {
                              xtype: 'button',
                              id: 'btnUpBDD',
                              iconCls: 'x-fa fa-database',
                              text: 'Upload BDD',
                              listeners: {
                                click: 'onBtnUpBDDClick'
                              }
                            },
                            {
                              xtype: 'button',
                              id: 'btnSubeFTP',
                              iconCls: 'x-fa fa-upload',
                              text: 'Upload FTP',
                              listeners: {
                                click: 'onBtnSubeFTPClick'
                              }
                            },
                            {
                              xtype: 'button',
                              hidden: true,
                              id: 'btnLoading',
                              iconCls: 'icon-load'
                            }
                          ]
                        }
                      ],
                      items: [
                        {
                          xtype: 'fieldset',
                          items: [
                            {
                              xtype: 'filefield',
                              anchor: '100%',
                              fieldLabel: 'Archivo',
                              name: 'archivo',
                              allowBlank: false
                            },
                            {
                              xtype: 'fieldcontainer',
                              height: 32,
                              hidden: true,
                              fieldLabel: 'Directorio local',
                              layout: {
                                type: 'hbox',
                                align: 'stretch'
                              },
                              items: [
                                {
                                  xtype: 'textfield',
                                  flex: 1,
                                  name: 'directorio'
                                },
                                {
                                  xtype: 'button',
                                  iconCls: 'x-fa fa-check',
                                  listeners: {
                                    click: 'onBtnSaveDirClick'
                                  }
                                }
                              ]
                            },
                            {
                              xtype: 'textfield',
                              anchor: '100%',
                              fieldLabel: 'Descripción',
                              name: 'descripcion_upload'
                            },
                            {
                              xtype: 'textfield',
                              anchor: '100%',
                              fieldLabel: 'Última subida',
                              name: 'fecha'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      xtype: 'gridpanel',
                      flex: 1,
                      frame: true,
                      id: 'grdInformacion',
                      columnLines: true,
                      forceFit: true,
                      store: 'InformacionStore',
                      columns: [
                        {
                          xtype: 'gridcolumn',
                          dataIndex: 'estado',
                          text: 'Estado'
                        },
                        {
                          xtype: 'numbercolumn',
                          dataIndex: 'cuantos',
                          text: 'Cuantos'
                        }
                      ],
                      dockedItems: [
                        {
                          xtype: 'toolbar',
                          dock: 'top',
                          items: [
                            {
                              xtype: 'button',
                              iconCls: 'x-fa fa-sync-alt',
                              text: 'Refrescar',
                              listeners: {
                                click: 'onBtnRefrescaInfoClick'
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      xtype: 'gridpanel',
                      flex: 1,
                      frame: true,
                      id: 'grdArchivosXAplicacion',
                      columnLines: true,
                      forceFit: true,
                      store: 'ArchivosXAplicacionStore',
                      columns: [
                        {
                          xtype: 'gridcolumn',
                          dataIndex: 'dominio',
                          text: 'Dominio'
                        },
                        {
                          xtype: 'gridcolumn',
                          dataIndex: 'aplicacion',
                          text: 'Aplicación'
                        },
                        {
                          xtype: 'numbercolumn',
                          dataIndex: 'cuantos',
                          text: 'Cuantos'
                        }
                      ],
                      dockedItems: [
                        {
                          xtype: 'toolbar',
                          dock: 'top',
                          items: [
                            {
                              xtype: 'button',
                              iconCls: 'x-fa fa-sync-alt',
                              text: 'Refrescar',
                              listeners: {
                                click: 'onBtnRefrescaArchivosXAplicacionClick'
                              }
                            },
                            {
                              xtype: 'button',
                              iconCls: 'x-fa fa-eye',
                              text: 'Ver archivos',
                              listeners: {
                                click: 'onBtnVerArchivosClick'
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          xtype: 'panel',
          layout: 'fit',
          title: 'Genera Script',
          items: [
            {
              xtype: 'panel',
              layout: 'border',
              items: [
                {
                  xtype: 'panel',
                  region: 'west',
                  flex: 1,
                  frame: true,
                  width: 150,
                  title: 'Bases de datos',
                  layout: {
                    type: 'vbox',
                    align: 'stretch'
                  },
                  items: [
                    {
                      xtype: 'gridpanel',
                      flex: 1,
                      id: 'grdAplicacionesScript',
                      columnLines: true,
                      forceFit: true,
                      store: 'AplicacionesScriptStore',
                      columns: [
                        {
                          xtype: 'gridcolumn',
                          dataIndex: 'bdd_aplicacion',
                          text: 'Aplicación'
                        },
                        {
                          xtype: 'gridcolumn',
                          renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                            if(value === 'A')
                            return 'Activo';
                            else
                            return '<span style="color:#FF0000">Inactivo</span>';
                          },
                          dataIndex: 'estado_bdd_aplicacion',
                          text: 'Estado',
                          editor: {
                            xtype: 'combobox',
                            displayField: 'nombre',
                            store: [
                              {
                                codigo: 'A',
                                nombre: 'Activo'
                              },
                              {
                                codigo: 'I',
                                nombre: 'Inactivo'
                              }
                            ],
                            valueField: 'codigo'
                          }
                        }
                      ],
                      plugins: [
                        {
                          ptype: 'cellediting',
                          listeners: {
                            edit: 'onCellEditingEdit1'
                          }
                        }
                      ],
                      dockedItems: [
                        {
                          xtype: 'toolbar',
                          dock: 'top',
                          items: [
                            {
                              xtype: 'button',
                              iconCls: 'x-fas fa-check',
                              text: 'Activar',
                              listeners: {
                                click: 'onBtnActivarBddClick'
                              }
                            },
                            {
                              xtype: 'button',
                              iconCls: 'x-fa fa-times',
                              text: 'Inactivar',
                              listeners: {
                                click: 'onBtnInactivarBddClick'
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  xtype: 'form',
                  region: 'center',
                  flex: 1.5,
                  frame: true,
                  id: 'frmScript',
                  title: 'Script generado',
                  layout: {
                    type: 'vbox',
                    align: 'stretch'
                  },
                  dockedItems: [
                    {
                      xtype: 'toolbar',
                      flex: 1,
                      dock: 'top',
                      items: [
                        {
                          xtype: 'button',
                          iconCls: 'x-fa fa-bolt',
                          text: 'Genera script',
                          listeners: {
                            click: 'onBtnGeneraScriptClick'
                          }
                        },
                        {
                          xtype: 'button',
                          iconCls: 'x-fa fa-eraser',
                          text: 'Limpiar script',
                          listeners: {
                            click: 'onBtnLimpiarClick'
                          }
                        }
                      ]
                    }
                  ],
                  items: [
                    {
                      xtype: 'textareafield',
                      flex: 0.5,
                      padding: 5,
                      fieldLabel: 'Script individual',
                      labelAlign: 'top',
                      name: 'script_individual'
                    },
                    {
                      xtype: 'textareafield',
                      flex: 1,
                      padding: 5,
                      fieldLabel: 'Script generado',
                      labelAlign: 'top',
                      name: 'script_generado'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  listeners: {
    afterrender: 'onContainerAfterRender'
  }

});