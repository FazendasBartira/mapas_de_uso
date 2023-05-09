var wms_layers = [];

var lyr_NDVI_fevereiro_2023_2_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_fevereiro_2023_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_fevereiro_2023_2_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5473107.177659, -961039.655671, -5462340.557283, -950292.714260]
                            })
                        });
var lyr_NDVI_fevereiro_2023_1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_fevereiro_2023_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_fevereiro_2023_1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5473107.177659, -961039.655671, -5462340.557283, -950292.714260]
                            })
                        });
var lyr_Cores_verdadeiras_fevereiro_2023_2_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cores_verdadeiras_fevereiro_2023_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Cores_verdadeiras_fevereiro_2023_2_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5476135.020800, -960612.798200, -5462405.019600, -948101.012100]
                            })
                        });
var lyr_Cores_verdadeiras_fevereiro_2023_1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cores_verdadeiras_fevereiro_2023_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Cores_verdadeiras_fevereiro_2023_1_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5476149.352800, -962604.938300, -5462448.015500, -956446.980200]
                            })
                        });
var format_APP_4 = new ol.format.GeoJSON();
var features_APP_4 = format_APP_4.readFeatures(json_APP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_4.addFeatures(features_APP_4);
var lyr_APP_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_4, 
                style: style_APP_4,
                interactive: true,
                title: '<img src="styles/legend/APP_4.png" /> APP'
            });
var format_Benfeitorias_5 = new ol.format.GeoJSON();
var features_Benfeitorias_5 = format_Benfeitorias_5.readFeatures(json_Benfeitorias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benfeitorias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benfeitorias_5.addFeatures(features_Benfeitorias_5);
var lyr_Benfeitorias_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benfeitorias_5, 
                style: style_Benfeitorias_5,
                interactive: true,
                title: '<img src="styles/legend/Benfeitorias_5.png" /> Benfeitorias'
            });
var format_Estradas_internas_6 = new ol.format.GeoJSON();
var features_Estradas_internas_6 = format_Estradas_internas_6.readFeatures(json_Estradas_internas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_internas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_internas_6.addFeatures(features_Estradas_internas_6);
var lyr_Estradas_internas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estradas_internas_6, 
                style: style_Estradas_internas_6,
                interactive: true,
                title: '<img src="styles/legend/Estradas_internas_6.png" /> Estradas_internas'
            });
var format_hidrografia_7 = new ol.format.GeoJSON();
var features_hidrografia_7 = format_hidrografia_7.readFeatures(json_hidrografia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_7.addFeatures(features_hidrografia_7);
var lyr_hidrografia_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hidrografia_7, 
                style: style_hidrografia_7,
                interactive: true,
                title: '<img src="styles/legend/hidrografia_7.png" /> hidrografia'
            });
var format_Limites_Alvorada_8 = new ol.format.GeoJSON();
var features_Limites_Alvorada_8 = format_Limites_Alvorada_8.readFeatures(json_Limites_Alvorada_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_Alvorada_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_Alvorada_8.addFeatures(features_Limites_Alvorada_8);
var lyr_Limites_Alvorada_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limites_Alvorada_8, 
                style: style_Limites_Alvorada_8,
                interactive: true,
                title: '<img src="styles/legend/Limites_Alvorada_8.png" /> Limites_Alvorada'
            });
var format_Regeneracao_9 = new ol.format.GeoJSON();
var features_Regeneracao_9 = format_Regeneracao_9.readFeatures(json_Regeneracao_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regeneracao_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regeneracao_9.addFeatures(features_Regeneracao_9);
var lyr_Regeneracao_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regeneracao_9, 
                style: style_Regeneracao_9,
                interactive: true,
                title: '<img src="styles/legend/Regeneracao_9.png" /> Regeneracao'
            });
var format_RL_10 = new ol.format.GeoJSON();
var features_RL_10 = format_RL_10.readFeatures(json_RL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_10.addFeatures(features_RL_10);
var lyr_RL_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_10, 
                style: style_RL_10,
                interactive: true,
                title: '<img src="styles/legend/RL_10.png" /> RL'
            });
var format_soja_11 = new ol.format.GeoJSON();
var features_soja_11 = format_soja_11.readFeatures(json_soja_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soja_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soja_11.addFeatures(features_soja_11);
var lyr_soja_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_soja_11, 
                style: style_soja_11,
                interactive: true,
                title: '<img src="styles/legend/soja_11.png" /> soja'
            });
var format_Utilidade_publica_12 = new ol.format.GeoJSON();
var features_Utilidade_publica_12 = format_Utilidade_publica_12.readFeatures(json_Utilidade_publica_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Utilidade_publica_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utilidade_publica_12.addFeatures(features_Utilidade_publica_12);
var lyr_Utilidade_publica_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Utilidade_publica_12, 
                style: style_Utilidade_publica_12,
                interactive: true,
                title: '<img src="styles/legend/Utilidade_publica_12.png" /> Utilidade_publica'
            });
var format_VNR_13 = new ol.format.GeoJSON();
var features_VNR_13 = format_VNR_13.readFeatures(json_VNR_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNR_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNR_13.addFeatures(features_VNR_13);
var lyr_VNR_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNR_13, 
                style: style_VNR_13,
                interactive: true,
                title: '<img src="styles/legend/VNR_13.png" /> VNR'
            });
var format_Sede_14 = new ol.format.GeoJSON();
var features_Sede_14 = format_Sede_14.readFeatures(json_Sede_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sede_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sede_14.addFeatures(features_Sede_14);
var lyr_Sede_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sede_14, 
                style: style_Sede_14,
                interactive: true,
                title: '<img src="styles/legend/Sede_14.png" /> Sede'
            });
var group_Cores_verdadeiras = new ol.layer.Group({
                                layers: [lyr_Cores_verdadeiras_fevereiro_2023_2_2,lyr_Cores_verdadeiras_fevereiro_2023_1_3,],
                                title: "Cores_verdadeiras"});
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_NDVI_fevereiro_2023_2_0,lyr_NDVI_fevereiro_2023_1_1,],
                                title: "NDVI"});

lyr_NDVI_fevereiro_2023_2_0.setVisible(true);lyr_NDVI_fevereiro_2023_1_1.setVisible(true);lyr_Cores_verdadeiras_fevereiro_2023_2_2.setVisible(true);lyr_Cores_verdadeiras_fevereiro_2023_1_3.setVisible(true);lyr_APP_4.setVisible(true);lyr_Benfeitorias_5.setVisible(true);lyr_Estradas_internas_6.setVisible(true);lyr_hidrografia_7.setVisible(true);lyr_Limites_Alvorada_8.setVisible(true);lyr_Regeneracao_9.setVisible(true);lyr_RL_10.setVisible(true);lyr_soja_11.setVisible(true);lyr_Utilidade_publica_12.setVisible(true);lyr_VNR_13.setVisible(true);lyr_Sede_14.setVisible(true);
var layersList = [group_NDVI,group_Cores_verdadeiras,lyr_APP_4,lyr_Benfeitorias_5,lyr_Estradas_internas_6,lyr_hidrografia_7,lyr_Limites_Alvorada_8,lyr_Regeneracao_9,lyr_RL_10,lyr_soja_11,lyr_Utilidade_publica_12,lyr_VNR_13,lyr_Sede_14];
lyr_APP_4.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_Benfeitorias_5.set('fieldAliases', {'fid': 'fid', 'TIPO': 'TIPO', 'AREA_HA': 'AREA_HA', });
lyr_Estradas_internas_6.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_hidrografia_7.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_Limites_Alvorada_8.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_Regeneracao_9.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_RL_10.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_soja_11.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_Utilidade_publica_12.set('fieldAliases', {'fid': 'fid', 'TIPO': 'TIPO', 'AREA_HA': 'AREA_HA', });
lyr_VNR_13.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Sede_14.set('fieldAliases', {'fid': 'fid', });
lyr_APP_4.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_Benfeitorias_5.set('fieldImages', {'fid': '', 'TIPO': '', 'AREA_HA': '', });
lyr_Estradas_internas_6.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_hidrografia_7.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_Limites_Alvorada_8.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_Regeneracao_9.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_RL_10.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_soja_11.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Utilidade_publica_12.set('fieldImages', {'fid': '', 'TIPO': '', 'AREA_HA': '', });
lyr_VNR_13.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_Sede_14.set('fieldImages', {'fid': '', });
lyr_APP_4.set('fieldLabels', {'fid': 'no label', 'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_Benfeitorias_5.set('fieldLabels', {'fid': 'no label', 'TIPO': 'no label', 'AREA_HA': 'no label', });
lyr_Estradas_internas_6.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_hidrografia_7.set('fieldLabels', {'fid': 'no label', 'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_Limites_Alvorada_8.set('fieldLabels', {'fid': 'no label', 'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_Regeneracao_9.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_RL_10.set('fieldLabels', {'fid': 'no label', 'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_soja_11.set('fieldLabels', {'fid': 'no label', 'Talhao': 'no label', 'AREA_HA': 'no label', });
lyr_Utilidade_publica_12.set('fieldLabels', {'fid': 'no label', 'TIPO': 'no label', 'AREA_HA': 'no label', });
lyr_VNR_13.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_Sede_14.set('fieldLabels', {'fid': 'no label', });
lyr_Sede_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});