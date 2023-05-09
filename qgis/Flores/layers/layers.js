var wms_layers = [];

var lyr_NDVI_FEVEREIRO_2023_1_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_FEVEREIRO_2023_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_FEVEREIRO_2023_1_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5377879.998300, -748662.473400, -5361508.142300, -726586.504400]
                            })
                        });
var lyr_NDVI_FEVEREIRO_2023_2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_FEVEREIRO_2023_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_FEVEREIRO_2023_2_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5377879.998300, -748662.473400, -5361508.142300, -726586.504200]
                            })
                        });
var lyr_CORES_VERDADEIRAS_FEVEREIRO_2023_1_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "CORES_VERDADEIRAS_FEVEREIRO_2023_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CORES_VERDADEIRAS_FEVEREIRO_2023_1_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5378400.725600, -748987.330800, -5370279.291300, -742944.028300]
                            })
                        });
var lyr_CORES_VERDADEIRAS_FEVEREIRO_2023_2_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "CORES_VERDADEIRAS_FEVEREIRO_2023_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CORES_VERDADEIRAS_FEVEREIRO_2023_2_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5378491.494500, -746288.148200, -5361508.142300, -726309.420000]
                            })
                        });
var format_Area_produtiva_4 = new ol.format.GeoJSON();
var features_Area_produtiva_4 = format_Area_produtiva_4.readFeatures(json_Area_produtiva_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_produtiva_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_produtiva_4.addFeatures(features_Area_produtiva_4);
var lyr_Area_produtiva_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_produtiva_4, 
                style: style_Area_produtiva_4,
                interactive: true,
                title: '<img src="styles/legend/Area_produtiva_4.png" /> Area_produtiva'
            });
var format_FLORESPecuaria_5 = new ol.format.GeoJSON();
var features_FLORESPecuaria_5 = format_FLORESPecuaria_5.readFeatures(json_FLORESPecuaria_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FLORESPecuaria_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FLORESPecuaria_5.addFeatures(features_FLORESPecuaria_5);
var lyr_FLORESPecuaria_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FLORESPecuaria_5, 
                style: style_FLORESPecuaria_5,
                interactive: true,
                title: '<img src="styles/legend/FLORESPecuaria_5.png" /> FLORES Pecuaria'
            });
var format_Soja_safra_22_23_6 = new ol.format.GeoJSON();
var features_Soja_safra_22_23_6 = format_Soja_safra_22_23_6.readFeatures(json_Soja_safra_22_23_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Soja_safra_22_23_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Soja_safra_22_23_6.addFeatures(features_Soja_safra_22_23_6);
var lyr_Soja_safra_22_23_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Soja_safra_22_23_6, 
                style: style_Soja_safra_22_23_6,
                interactive: true,
                title: '<img src="styles/legend/Soja_safra_22_23_6.png" /> Soja_safra_22_23'
            });
var format_APP_7 = new ol.format.GeoJSON();
var features_APP_7 = format_APP_7.readFeatures(json_APP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_7.addFeatures(features_APP_7);
var lyr_APP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_7, 
                style: style_APP_7,
                interactive: true,
                title: '<img src="styles/legend/APP_7.png" /> APP'
            });
var format_BENFEITORIAS_8 = new ol.format.GeoJSON();
var features_BENFEITORIAS_8 = format_BENFEITORIAS_8.readFeatures(json_BENFEITORIAS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENFEITORIAS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENFEITORIAS_8.addFeatures(features_BENFEITORIAS_8);
var lyr_BENFEITORIAS_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BENFEITORIAS_8, 
                style: style_BENFEITORIAS_8,
                interactive: true,
                title: '<img src="styles/legend/BENFEITORIAS_8.png" /> BENFEITORIAS'
            });
var format_Estradas_internas_9 = new ol.format.GeoJSON();
var features_Estradas_internas_9 = format_Estradas_internas_9.readFeatures(json_Estradas_internas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_internas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_internas_9.addFeatures(features_Estradas_internas_9);
var lyr_Estradas_internas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estradas_internas_9, 
                style: style_Estradas_internas_9,
                interactive: true,
                title: '<img src="styles/legend/Estradas_internas_9.png" /> Estradas_internas'
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
var format_VNR_11 = new ol.format.GeoJSON();
var features_VNR_11 = format_VNR_11.readFeatures(json_VNR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNR_11.addFeatures(features_VNR_11);
var lyr_VNR_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNR_11, 
                style: style_VNR_11,
                interactive: true,
                title: '<img src="styles/legend/VNR_11.png" /> VNR'
            });
var format_Area_em_regeneracao_12 = new ol.format.GeoJSON();
var features_Area_em_regeneracao_12 = format_Area_em_regeneracao_12.readFeatures(json_Area_em_regeneracao_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_em_regeneracao_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_em_regeneracao_12.addFeatures(features_Area_em_regeneracao_12);
var lyr_Area_em_regeneracao_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_em_regeneracao_12, 
                style: style_Area_em_regeneracao_12,
                interactive: true,
                title: '<img src="styles/legend/Area_em_regeneracao_12.png" /> Area_em_regeneracao'
            });
var format_Pistadepouso_13 = new ol.format.GeoJSON();
var features_Pistadepouso_13 = format_Pistadepouso_13.readFeatures(json_Pistadepouso_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pistadepouso_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistadepouso_13.addFeatures(features_Pistadepouso_13);
var lyr_Pistadepouso_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pistadepouso_13, 
                style: style_Pistadepouso_13,
                interactive: true,
                title: '<img src="styles/legend/Pistadepouso_13.png" /> Pista de pouso'
            });
var format_sede_14 = new ol.format.GeoJSON();
var features_sede_14 = format_sede_14.readFeatures(json_sede_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sede_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sede_14.addFeatures(features_sede_14);
var lyr_sede_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sede_14, 
                style: style_sede_14,
                interactive: true,
                title: '<img src="styles/legend/sede_14.png" /> sede'
            });
var group_CORES_VERDADEIRAS = new ol.layer.Group({
                                layers: [lyr_CORES_VERDADEIRAS_FEVEREIRO_2023_1_2,lyr_CORES_VERDADEIRAS_FEVEREIRO_2023_2_3,],
                                title: "CORES_VERDADEIRAS"});
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_NDVI_FEVEREIRO_2023_1_0,lyr_NDVI_FEVEREIRO_2023_2_1,],
                                title: "NDVI"});

lyr_NDVI_FEVEREIRO_2023_1_0.setVisible(true);lyr_NDVI_FEVEREIRO_2023_2_1.setVisible(true);lyr_CORES_VERDADEIRAS_FEVEREIRO_2023_1_2.setVisible(true);lyr_CORES_VERDADEIRAS_FEVEREIRO_2023_2_3.setVisible(true);lyr_Area_produtiva_4.setVisible(true);lyr_FLORESPecuaria_5.setVisible(true);lyr_Soja_safra_22_23_6.setVisible(true);lyr_APP_7.setVisible(true);lyr_BENFEITORIAS_8.setVisible(true);lyr_Estradas_internas_9.setVisible(true);lyr_RL_10.setVisible(true);lyr_VNR_11.setVisible(true);lyr_Area_em_regeneracao_12.setVisible(true);lyr_Pistadepouso_13.setVisible(true);lyr_sede_14.setVisible(true);
var layersList = [group_NDVI,group_CORES_VERDADEIRAS,lyr_Area_produtiva_4,lyr_FLORESPecuaria_5,lyr_Soja_safra_22_23_6,lyr_APP_7,lyr_BENFEITORIAS_8,lyr_Estradas_internas_9,lyr_RL_10,lyr_VNR_11,lyr_Area_em_regeneracao_12,lyr_Pistadepouso_13,lyr_sede_14];
lyr_Area_produtiva_4.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_FLORESPecuaria_5.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_Soja_safra_22_23_6.set('fieldAliases', {'fid': 'fid', 'TALHAO': 'TALHAO', 'AREA_HA': 'AREA_HA', });
lyr_APP_7.set('fieldAliases', {'fid': 'fid', 'TIPO': 'TIPO', 'AREA_HA': 'AREA_HA', });
lyr_BENFEITORIAS_8.set('fieldAliases', {'fid': 'fid', 'TIPO': 'TIPO', 'AREA_HA': 'AREA_HA', });
lyr_Estradas_internas_9.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_RL_10.set('fieldAliases', {'fid': 'fid', 'TIPO': 'TIPO', 'AREA_HA': 'AREA_HA', });
lyr_VNR_11.set('fieldAliases', {'fid': 'fid', 'TIPO': 'TIPO', 'AREA_HA': 'AREA_HA', });
lyr_Area_em_regeneracao_12.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Pistadepouso_13.set('fieldAliases', {'fid': 'fid', });
lyr_sede_14.set('fieldAliases', {'fid': 'fid', });
lyr_Area_produtiva_4.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_FLORESPecuaria_5.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Soja_safra_22_23_6.set('fieldImages', {'fid': 'TextEdit', 'TALHAO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_APP_7.set('fieldImages', {'fid': 'TextEdit', 'TIPO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_BENFEITORIAS_8.set('fieldImages', {'fid': 'TextEdit', 'TIPO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Estradas_internas_9.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RL_10.set('fieldImages', {'fid': 'TextEdit', 'TIPO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_VNR_11.set('fieldImages', {'fid': 'TextEdit', 'TIPO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Area_em_regeneracao_12.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Pistadepouso_13.set('fieldImages', {'fid': '', });
lyr_sede_14.set('fieldImages', {'fid': '', });
lyr_Area_produtiva_4.set('fieldLabels', {'fid': 'no label', 'Talhao': 'no label', 'AREA_HA': 'no label', });
lyr_FLORESPecuaria_5.set('fieldLabels', {'fid': 'no label', 'Talhao': 'no label', 'AREA_HA': 'no label', });
lyr_Soja_safra_22_23_6.set('fieldLabels', {'fid': 'no label', 'TALHAO': 'no label', 'AREA_HA': 'no label', });
lyr_APP_7.set('fieldLabels', {'fid': 'no label', 'TIPO': 'no label', 'AREA_HA': 'no label', });
lyr_BENFEITORIAS_8.set('fieldLabels', {'fid': 'no label', 'TIPO': 'no label', 'AREA_HA': 'no label', });
lyr_Estradas_internas_9.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_RL_10.set('fieldLabels', {'fid': 'no label', 'TIPO': 'no label', 'AREA_HA': 'no label', });
lyr_VNR_11.set('fieldLabels', {'fid': 'no label', 'TIPO': 'no label', 'AREA_HA': 'no label', });
lyr_Area_em_regeneracao_12.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_Pistadepouso_13.set('fieldLabels', {'fid': 'no label', });
lyr_sede_14.set('fieldLabels', {'fid': 'no label', });
lyr_sede_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});