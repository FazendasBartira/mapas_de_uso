var wms_layers = [];

var lyr_NDVI_marco_2023_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_marco_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_marco_2023_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5444795.839200, -830053.576600, -5421329.671600, -811364.723200]
                            })
                        });
var lyr_cores_verdadeiras_marco_2023_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "cores_verdadeiras_marco_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/cores_verdadeiras_marco_2023_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5444795.839200, -830053.576600, -5421329.671600, -811364.723200]
                            })
                        });
var format_Regenerao_2 = new ol.format.GeoJSON();
var features_Regenerao_2 = format_Regenerao_2.readFeatures(json_Regenerao_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regenerao_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regenerao_2.addFeatures(features_Regenerao_2);
var lyr_Regenerao_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regenerao_2, 
                style: style_Regenerao_2,
                interactive: true,
                title: '<img src="styles/legend/Regenerao_2.png" /> Regeneração'
            });
var format_Benfeitorias_3 = new ol.format.GeoJSON();
var features_Benfeitorias_3 = format_Benfeitorias_3.readFeatures(json_Benfeitorias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benfeitorias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benfeitorias_3.addFeatures(features_Benfeitorias_3);
var lyr_Benfeitorias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benfeitorias_3, 
                style: style_Benfeitorias_3,
                interactive: true,
                title: '<img src="styles/legend/Benfeitorias_3.png" /> Benfeitorias'
            });
var format_Estradas_R01_4 = new ol.format.GeoJSON();
var features_Estradas_R01_4 = format_Estradas_R01_4.readFeatures(json_Estradas_R01_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_R01_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_R01_4.addFeatures(features_Estradas_R01_4);
var lyr_Estradas_R01_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estradas_R01_4, 
                style: style_Estradas_R01_4,
                interactive: true,
                title: '<img src="styles/legend/Estradas_R01_4.png" /> Estradas_R01'
            });
var format_VNR_5 = new ol.format.GeoJSON();
var features_VNR_5 = format_VNR_5.readFeatures(json_VNR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNR_5.addFeatures(features_VNR_5);
var lyr_VNR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNR_5, 
                style: style_VNR_5,
                interactive: true,
                title: '<img src="styles/legend/VNR_5.png" /> VNR'
            });
var format_RL_6 = new ol.format.GeoJSON();
var features_RL_6 = format_RL_6.readFeatures(json_RL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_6.addFeatures(features_RL_6);
var lyr_RL_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_6, 
                style: style_RL_6,
                interactive: true,
                title: '<img src="styles/legend/RL_6.png" /> RL'
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
var format_HIDROGRAFIA_8 = new ol.format.GeoJSON();
var features_HIDROGRAFIA_8 = format_HIDROGRAFIA_8.readFeatures(json_HIDROGRAFIA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDROGRAFIA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROGRAFIA_8.addFeatures(features_HIDROGRAFIA_8);
var lyr_HIDROGRAFIA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HIDROGRAFIA_8, 
                style: style_HIDROGRAFIA_8,
                interactive: true,
                title: '<img src="styles/legend/HIDROGRAFIA_8.png" /> HIDROGRAFIA'
            });
var format_SERVIDAO_9 = new ol.format.GeoJSON();
var features_SERVIDAO_9 = format_SERVIDAO_9.readFeatures(json_SERVIDAO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVIDAO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVIDAO_9.addFeatures(features_SERVIDAO_9);
var lyr_SERVIDAO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SERVIDAO_9, 
                style: style_SERVIDAO_9,
                interactive: true,
                title: '<img src="styles/legend/SERVIDAO_9.png" /> SERVIDAO'
            });
var format_Lavoura_10 = new ol.format.GeoJSON();
var features_Lavoura_10 = format_Lavoura_10.readFeatures(json_Lavoura_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lavoura_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lavoura_10.addFeatures(features_Lavoura_10);
var lyr_Lavoura_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lavoura_10, 
                style: style_Lavoura_10,
                interactive: true,
                title: '<img src="styles/legend/Lavoura_10.png" /> Lavoura'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_Regenerao_2,lyr_Benfeitorias_3,lyr_Estradas_R01_4,lyr_VNR_5,lyr_RL_6,lyr_APP_7,lyr_HIDROGRAFIA_8,lyr_SERVIDAO_9,lyr_Lavoura_10,],
                                title: "group1"});
var group_subgroup1 = new ol.layer.Group({
                                layers: [lyr_NDVI_marco_2023_0,lyr_cores_verdadeiras_marco_2023_1,],
                                title: "sub-group1"});

lyr_NDVI_marco_2023_0.setVisible(true);lyr_cores_verdadeiras_marco_2023_1.setVisible(true);lyr_Regenerao_2.setVisible(true);lyr_Benfeitorias_3.setVisible(true);lyr_Estradas_R01_4.setVisible(true);lyr_VNR_5.setVisible(true);lyr_RL_6.setVisible(true);lyr_APP_7.setVisible(true);lyr_HIDROGRAFIA_8.setVisible(true);lyr_SERVIDAO_9.setVisible(true);lyr_Lavoura_10.setVisible(true);
var layersList = [group_subgroup1,group_group1];
lyr_Regenerao_2.set('fieldAliases', {'id': 'id', 'Area_ha': 'Area_ha', });
lyr_Benfeitorias_3.set('fieldAliases', {'id': 'id', 'Area_ha': 'Area_ha', });
lyr_Estradas_R01_4.set('fieldAliases', {'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', 'Area_ha': 'Area_ha', 'A': 'A', });
lyr_VNR_5.set('fieldAliases', {'Area_ha': 'Area_ha', });
lyr_RL_6.set('fieldAliases', {'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_APP_7.set('fieldAliases', {'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_HIDROGRAFIA_8.set('fieldAliases', {'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_SERVIDAO_9.set('fieldAliases', {'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_Lavoura_10.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'Area_ha': 'Area_ha', });
lyr_Regenerao_2.set('fieldImages', {'id': '', 'Area_ha': '', });
lyr_Benfeitorias_3.set('fieldImages', {'id': '', 'Area_ha': '', });
lyr_Estradas_R01_4.set('fieldImages', {'COD_IMOVEL': '', 'ID': '', 'Area_ha': '', 'A': '', });
lyr_VNR_5.set('fieldImages', {'Area_ha': '', });
lyr_RL_6.set('fieldImages', {'COD_IMOVEL': '', 'ID': '', });
lyr_APP_7.set('fieldImages', {'COD_IMOVEL': '', 'ID': '', });
lyr_HIDROGRAFIA_8.set('fieldImages', {'COD_IMOVEL': '', 'ID': '', });
lyr_SERVIDAO_9.set('fieldImages', {'COD_IMOVEL': '', 'ID': '', });
lyr_Lavoura_10.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Regenerao_2.set('fieldLabels', {});
lyr_Benfeitorias_3.set('fieldLabels', {});
lyr_Estradas_R01_4.set('fieldLabels', {});
lyr_VNR_5.set('fieldLabels', {});
lyr_RL_6.set('fieldLabels', {});
lyr_APP_7.set('fieldLabels', {});
lyr_HIDROGRAFIA_8.set('fieldLabels', {});
lyr_SERVIDAO_9.set('fieldLabels', {});
lyr_Lavoura_10.set('fieldLabels', {});
lyr_Lavoura_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});