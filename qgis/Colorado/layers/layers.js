var wms_layers = [];

var lyr_NDVI_MARCO_2023_1_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_MARCO_2023_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_MARCO_2023_1_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5516574.986100, -1213829.562200, -5498077.225400, -1188065.507700]
                            })
                        });
var lyr_CORES_VERDADEIRAS_MARCO_2023__1 = new ol.layer.Image({
                            opacity: 1,
                            title: "CORES_VERDADEIRAS_MARCO_2023_",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CORES_VERDADEIRAS_MARCO_2023__1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5518141.945200, -1214737.251800, -5497609.048600, -1186928.507000]
                            })
                        });
var format_APP_IPUCA_2 = new ol.format.GeoJSON();
var features_APP_IPUCA_2 = format_APP_IPUCA_2.readFeatures(json_APP_IPUCA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_IPUCA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_IPUCA_2.addFeatures(features_APP_IPUCA_2);
var lyr_APP_IPUCA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_IPUCA_2, 
                style: style_APP_IPUCA_2,
                interactive: true,
                title: '<img src="styles/legend/APP_IPUCA_2.png" /> APP_IPUCA'
            });
var format_VN_ABRIR_3 = new ol.format.GeoJSON();
var features_VN_ABRIR_3 = format_VN_ABRIR_3.readFeatures(json_VN_ABRIR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VN_ABRIR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VN_ABRIR_3.addFeatures(features_VN_ABRIR_3);
var lyr_VN_ABRIR_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VN_ABRIR_3, 
                style: style_VN_ABRIR_3,
                interactive: true,
                title: '<img src="styles/legend/VN_ABRIR_3.png" /> VN_ABRIR'
            });
var format_RL_4 = new ol.format.GeoJSON();
var features_RL_4 = format_RL_4.readFeatures(json_RL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_4.addFeatures(features_RL_4);
var lyr_RL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_4, 
                style: style_RL_4,
                interactive: true,
                title: '<img src="styles/legend/RL_4.png" /> RL'
            });
var format_Area_produtiva_5 = new ol.format.GeoJSON();
var features_Area_produtiva_5 = format_Area_produtiva_5.readFeatures(json_Area_produtiva_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_produtiva_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_produtiva_5.addFeatures(features_Area_produtiva_5);
var lyr_Area_produtiva_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_produtiva_5, 
                style: style_Area_produtiva_5,
                interactive: true,
                title: '<img src="styles/legend/Area_produtiva_5.png" /> Area_produtiva'
            });
var format_IPUCAS_6 = new ol.format.GeoJSON();
var features_IPUCAS_6 = format_IPUCAS_6.readFeatures(json_IPUCAS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPUCAS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPUCAS_6.addFeatures(features_IPUCAS_6);
var lyr_IPUCAS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IPUCAS_6, 
                style: style_IPUCAS_6,
                interactive: true,
                title: '<img src="styles/legend/IPUCAS_6.png" /> IPUCAS'
            });
var format_VEREDAS_7 = new ol.format.GeoJSON();
var features_VEREDAS_7 = format_VEREDAS_7.readFeatures(json_VEREDAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VEREDAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VEREDAS_7.addFeatures(features_VEREDAS_7);
var lyr_VEREDAS_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VEREDAS_7, 
                style: style_VEREDAS_7,
                interactive: true,
                title: '<img src="styles/legend/VEREDAS_7.png" /> VEREDAS'
            });
var format_ARLNATIVA_8 = new ol.format.GeoJSON();
var features_ARLNATIVA_8 = format_ARLNATIVA_8.readFeatures(json_ARLNATIVA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARLNATIVA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARLNATIVA_8.addFeatures(features_ARLNATIVA_8);
var lyr_ARLNATIVA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARLNATIVA_8, 
                style: style_ARLNATIVA_8,
                interactive: true,
                title: '<img src="styles/legend/ARLNATIVA_8.png" /> ARL NATIVA'
            });
var format_BARRAMENTO_9 = new ol.format.GeoJSON();
var features_BARRAMENTO_9 = format_BARRAMENTO_9.readFeatures(json_BARRAMENTO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRAMENTO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRAMENTO_9.addFeatures(features_BARRAMENTO_9);
var lyr_BARRAMENTO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BARRAMENTO_9, 
                style: style_BARRAMENTO_9,
                interactive: true,
                title: '<img src="styles/legend/BARRAMENTO_9.png" /> BARRAMENTO'
            });
var format_FLORESTA_10 = new ol.format.GeoJSON();
var features_FLORESTA_10 = format_FLORESTA_10.readFeatures(json_FLORESTA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FLORESTA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FLORESTA_10.addFeatures(features_FLORESTA_10);
var lyr_FLORESTA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FLORESTA_10, 
                style: style_FLORESTA_10,
                interactive: true,
                title: '<img src="styles/legend/FLORESTA_10.png" /> FLORESTA'
            });
var format_IPUCAS_11 = new ol.format.GeoJSON();
var features_IPUCAS_11 = format_IPUCAS_11.readFeatures(json_IPUCAS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPUCAS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPUCAS_11.addFeatures(features_IPUCAS_11);
var lyr_IPUCAS_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IPUCAS_11, 
                style: style_IPUCAS_11,
                interactive: true,
                title: '<img src="styles/legend/IPUCAS_11.png" /> IPUCAS'
            });
var format_Regeneracao_12 = new ol.format.GeoJSON();
var features_Regeneracao_12 = format_Regeneracao_12.readFeatures(json_Regeneracao_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regeneracao_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regeneracao_12.addFeatures(features_Regeneracao_12);
var lyr_Regeneracao_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regeneracao_12, 
                style: style_Regeneracao_12,
                interactive: true,
                title: '<img src="styles/legend/Regeneracao_12.png" /> Regeneracao'
            });
var format_APP_VEREDAS_13 = new ol.format.GeoJSON();
var features_APP_VEREDAS_13 = format_APP_VEREDAS_13.readFeatures(json_APP_VEREDAS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_VEREDAS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_VEREDAS_13.addFeatures(features_APP_VEREDAS_13);
var lyr_APP_VEREDAS_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_VEREDAS_13, 
                style: style_APP_VEREDAS_13,
                interactive: true,
                title: '<img src="styles/legend/APP_VEREDAS_13.png" /> APP_VEREDAS'
            });
var format_APP_14 = new ol.format.GeoJSON();
var features_APP_14 = format_APP_14.readFeatures(json_APP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_14.addFeatures(features_APP_14);
var lyr_APP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_14, 
                style: style_APP_14,
                interactive: true,
                title: '<img src="styles/legend/APP_14.png" /> APP'
            });
var format_1_AREA_IMOVEL_CALCULADO_15 = new ol.format.GeoJSON();
var features_1_AREA_IMOVEL_CALCULADO_15 = format_1_AREA_IMOVEL_CALCULADO_15.readFeatures(json_1_AREA_IMOVEL_CALCULADO_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_AREA_IMOVEL_CALCULADO_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_AREA_IMOVEL_CALCULADO_15.addFeatures(features_1_AREA_IMOVEL_CALCULADO_15);
var lyr_1_AREA_IMOVEL_CALCULADO_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_AREA_IMOVEL_CALCULADO_15, 
                style: style_1_AREA_IMOVEL_CALCULADO_15,
                interactive: true,
                title: '<img src="styles/legend/1_AREA_IMOVEL_CALCULADO_15.png" /> 1_AREA_IMOVEL_CALCULADO'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_APP_IPUCA_2,lyr_VN_ABRIR_3,lyr_RL_4,lyr_Area_produtiva_5,lyr_IPUCAS_6,lyr_VEREDAS_7,lyr_ARLNATIVA_8,lyr_BARRAMENTO_9,lyr_FLORESTA_10,lyr_IPUCAS_11,lyr_Regeneracao_12,lyr_APP_VEREDAS_13,lyr_APP_14,],
                                title: "group1"});
var group_CORES_VERDADEIRAS = new ol.layer.Group({
                                layers: [lyr_CORES_VERDADEIRAS_MARCO_2023__1,],
                                title: "CORES_VERDADEIRAS"});
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_NDVI_MARCO_2023_1_0,],
                                title: "NDVI"});

lyr_NDVI_MARCO_2023_1_0.setVisible(true);lyr_CORES_VERDADEIRAS_MARCO_2023__1.setVisible(true);lyr_APP_IPUCA_2.setVisible(true);lyr_VN_ABRIR_3.setVisible(true);lyr_RL_4.setVisible(true);lyr_Area_produtiva_5.setVisible(true);lyr_IPUCAS_6.setVisible(true);lyr_VEREDAS_7.setVisible(true);lyr_ARLNATIVA_8.setVisible(true);lyr_BARRAMENTO_9.setVisible(true);lyr_FLORESTA_10.setVisible(true);lyr_IPUCAS_11.setVisible(true);lyr_Regeneracao_12.setVisible(true);lyr_APP_VEREDAS_13.setVisible(true);lyr_APP_14.setVisible(true);lyr_1_AREA_IMOVEL_CALCULADO_15.setVisible(true);
var layersList = [group_NDVI,group_CORES_VERDADEIRAS,group_group1,lyr_1_AREA_IMOVEL_CALCULADO_15];
lyr_APP_IPUCA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VN_ABRIR_3.set('fieldAliases', {'Id': 'Id', 'ÁREA': 'ÁREA', });
lyr_RL_4.set('fieldAliases', {'Id': 'Id', 'ÁREA': 'ÁREA', });
lyr_Area_produtiva_5.set('fieldAliases', {'Id': 'Id', 'ÁREA': 'ÁREA', });
lyr_IPUCAS_6.set('fieldAliases', {'Id': 'Id', });
lyr_VEREDAS_7.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'NOME': 'NOME', 'GEOMETRIAA': 'GEOMETRIAA', 'CLEI': 'CLEI', });
lyr_ARLNATIVA_8.set('fieldAliases', {'Id': 'Id', 'ÁREA': 'ÁREA', });
lyr_BARRAMENTO_9.set('fieldAliases', {'Id': 'Id', 'ÁREA': 'ÁREA', });
lyr_FLORESTA_10.set('fieldAliases', {'CD_FCIM': 'CD_FCIM', 'LEG_CARGA': 'LEG_CARGA', 'CLAS_DOMI': 'CLAS_DOMI', 'LEG_UVEG': 'LEG_UVEG', 'NM_UVEG': 'NM_UVEG', 'LEG_UANTR': 'LEG_UANTR', 'NM_UANTR': 'NM_UANTR', 'LEG_CONTAT': 'LEG_CONTAT', 'NM_CONTAT': 'NM_CONTAT', 'VEG_PRETET': 'VEG_PRETET', 'NM_PRETET': 'NM_PRETET', 'LEG_SEC1': 'LEG_SEC1', 'NM_SEC1': 'NM_SEC1', 'LEG_SEC2': 'LEG_SEC2', 'NM_SEC2': 'NM_SEC2', 'LEG_SUP': 'LEG_SUP', 'LEGENDA': 'LEGENDA', 'AR_POLI_KM': 'AR_POLI_KM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Classes': 'Classes', 'AnáliseCA': 'AnáliseCA', 'Area': 'Area', 'Hectares': 'Hectares', });
lyr_IPUCAS_11.set('fieldAliases', {'Id': 'Id', });
lyr_Regeneracao_12.set('fieldAliases', {'AREA_HA': 'AREA_HA', });
lyr_APP_VEREDAS_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'NOME': 'NOME', 'GEOMETRIAA': 'GEOMETRIAA', 'CLEI': 'CLEI', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_APP_14.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', });
lyr_1_AREA_IMOVEL_CALCULADO_15.set('fieldAliases', {'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_APP_IPUCA_2.set('fieldImages', {'OBJECTID': '', 'Id': '', 'BUFF_DIST': '', 'ORIG_FID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_VN_ABRIR_3.set('fieldImages', {'Id': '', 'ÁREA': '', });
lyr_RL_4.set('fieldImages', {'Id': '', 'ÁREA': '', });
lyr_Area_produtiva_5.set('fieldImages', {'Id': '', 'ÁREA': '', });
lyr_IPUCAS_6.set('fieldImages', {'Id': '', });
lyr_VEREDAS_7.set('fieldImages', {'SHAPE_Leng': '', 'SHAPE_Area': '', 'NOME': '', 'GEOMETRIAA': '', 'CLEI': '', });
lyr_ARLNATIVA_8.set('fieldImages', {'Id': '', 'ÁREA': '', });
lyr_BARRAMENTO_9.set('fieldImages', {'Id': '', 'ÁREA': '', });
lyr_FLORESTA_10.set('fieldImages', {'CD_FCIM': '', 'LEG_CARGA': '', 'CLAS_DOMI': '', 'LEG_UVEG': '', 'NM_UVEG': '', 'LEG_UANTR': '', 'NM_UANTR': '', 'LEG_CONTAT': '', 'NM_CONTAT': '', 'VEG_PRETET': '', 'NM_PRETET': '', 'LEG_SEC1': '', 'NM_SEC1': '', 'LEG_SEC2': '', 'NM_SEC2': '', 'LEG_SUP': '', 'LEGENDA': '', 'AR_POLI_KM': '', 'Shape_Leng': '', 'Shape_Area': '', 'Classes': '', 'AnáliseCA': '', 'Area': '', 'Hectares': '', });
lyr_IPUCAS_11.set('fieldImages', {'Id': '', });
lyr_Regeneracao_12.set('fieldImages', {'AREA_HA': '', });
lyr_APP_VEREDAS_13.set('fieldImages', {'OBJECTID': '', 'SHAPE_Leng': '', 'NOME': '', 'GEOMETRIAA': '', 'CLEI': '', 'BUFF_DIST': '', 'ORIG_FID': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_APP_14.set('fieldImages', {'Id': '', 'AREA': '', });
lyr_1_AREA_IMOVEL_CALCULADO_15.set('fieldImages', {'COD_IMOVEL': '', 'ID': '', });
lyr_APP_IPUCA_2.set('fieldLabels', {});
lyr_VN_ABRIR_3.set('fieldLabels', {});
lyr_RL_4.set('fieldLabels', {});
lyr_Area_produtiva_5.set('fieldLabels', {});
lyr_IPUCAS_6.set('fieldLabels', {});
lyr_VEREDAS_7.set('fieldLabels', {});
lyr_ARLNATIVA_8.set('fieldLabels', {});
lyr_BARRAMENTO_9.set('fieldLabels', {});
lyr_FLORESTA_10.set('fieldLabels', {});
lyr_IPUCAS_11.set('fieldLabels', {});
lyr_Regeneracao_12.set('fieldLabels', {});
lyr_APP_VEREDAS_13.set('fieldLabels', {});
lyr_APP_14.set('fieldLabels', {});
lyr_1_AREA_IMOVEL_CALCULADO_15.set('fieldLabels', {'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_1_AREA_IMOVEL_CALCULADO_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});