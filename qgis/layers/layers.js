var wms_layers = [];

var format_APP_0 = new ol.format.GeoJSON();
var features_APP_0 = format_APP_0.readFeatures(json_APP_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_0.addFeatures(features_APP_0);
var lyr_APP_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_0, 
                style: style_APP_0,
                interactive: true,
                title: '<img src="styles/legend/APP_0.png" /> APP'
            });
var format_Benfeitorias_1 = new ol.format.GeoJSON();
var features_Benfeitorias_1 = format_Benfeitorias_1.readFeatures(json_Benfeitorias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benfeitorias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benfeitorias_1.addFeatures(features_Benfeitorias_1);
var lyr_Benfeitorias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benfeitorias_1, 
                style: style_Benfeitorias_1,
                interactive: true,
                title: '<img src="styles/legend/Benfeitorias_1.png" /> Benfeitorias'
            });
var format_Estradas_internas_2 = new ol.format.GeoJSON();
var features_Estradas_internas_2 = format_Estradas_internas_2.readFeatures(json_Estradas_internas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_internas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_internas_2.addFeatures(features_Estradas_internas_2);
var lyr_Estradas_internas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estradas_internas_2, 
                style: style_Estradas_internas_2,
                interactive: true,
                title: '<img src="styles/legend/Estradas_internas_2.png" /> Estradas_internas'
            });
var format_hidrografia_3 = new ol.format.GeoJSON();
var features_hidrografia_3 = format_hidrografia_3.readFeatures(json_hidrografia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_3.addFeatures(features_hidrografia_3);
var lyr_hidrografia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hidrografia_3, 
                style: style_hidrografia_3,
                interactive: true,
                title: '<img src="styles/legend/hidrografia_3.png" /> hidrografia'
            });
var format_Limites_Alvorada_4 = new ol.format.GeoJSON();
var features_Limites_Alvorada_4 = format_Limites_Alvorada_4.readFeatures(json_Limites_Alvorada_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_Alvorada_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_Alvorada_4.addFeatures(features_Limites_Alvorada_4);
var lyr_Limites_Alvorada_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limites_Alvorada_4, 
                style: style_Limites_Alvorada_4,
                interactive: true,
                title: '<img src="styles/legend/Limites_Alvorada_4.png" /> Limites_Alvorada'
            });
var format_Regeneracao_5 = new ol.format.GeoJSON();
var features_Regeneracao_5 = format_Regeneracao_5.readFeatures(json_Regeneracao_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regeneracao_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regeneracao_5.addFeatures(features_Regeneracao_5);
var lyr_Regeneracao_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regeneracao_5, 
                style: style_Regeneracao_5,
                interactive: true,
                title: '<img src="styles/legend/Regeneracao_5.png" /> Regeneracao'
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
var format_soja_7 = new ol.format.GeoJSON();
var features_soja_7 = format_soja_7.readFeatures(json_soja_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soja_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soja_7.addFeatures(features_soja_7);
var lyr_soja_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_soja_7, 
                style: style_soja_7,
                interactive: true,
                title: '<img src="styles/legend/soja_7.png" /> soja'
            });
var format_Utilidade_publica_8 = new ol.format.GeoJSON();
var features_Utilidade_publica_8 = format_Utilidade_publica_8.readFeatures(json_Utilidade_publica_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Utilidade_publica_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utilidade_publica_8.addFeatures(features_Utilidade_publica_8);
var lyr_Utilidade_publica_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Utilidade_publica_8, 
                style: style_Utilidade_publica_8,
                interactive: true,
                title: '<img src="styles/legend/Utilidade_publica_8.png" /> Utilidade_publica'
            });
var format_VNR_9 = new ol.format.GeoJSON();
var features_VNR_9 = format_VNR_9.readFeatures(json_VNR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNR_9.addFeatures(features_VNR_9);
var lyr_VNR_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNR_9, 
                style: style_VNR_9,
                interactive: true,
                title: '<img src="styles/legend/VNR_9.png" /> VNR'
            });

lyr_APP_0.setVisible(true);lyr_Benfeitorias_1.setVisible(true);lyr_Estradas_internas_2.setVisible(true);lyr_hidrografia_3.setVisible(true);lyr_Limites_Alvorada_4.setVisible(true);lyr_Regeneracao_5.setVisible(true);lyr_RL_6.setVisible(true);lyr_soja_7.setVisible(true);lyr_Utilidade_publica_8.setVisible(true);lyr_VNR_9.setVisible(true);
var layersList = [lyr_APP_0,lyr_Benfeitorias_1,lyr_Estradas_internas_2,lyr_hidrografia_3,lyr_Limites_Alvorada_4,lyr_Regeneracao_5,lyr_RL_6,lyr_soja_7,lyr_Utilidade_publica_8,lyr_VNR_9];
lyr_APP_0.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_Benfeitorias_1.set('fieldAliases', {'fid': 'fid', 'TIPO': 'TIPO', 'AREA_HA': 'AREA_HA', });
lyr_Estradas_internas_2.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_hidrografia_3.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_Limites_Alvorada_4.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_Regeneracao_5.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_RL_6.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_soja_7.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_Utilidade_publica_8.set('fieldAliases', {'fid': 'fid', 'TIPO': 'TIPO', 'AREA_HA': 'AREA_HA', });
lyr_VNR_9.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_APP_0.set('fieldImages', {'fid': 'TextEdit', 'COD_IMOVEL': 'TextEdit', 'ID': 'TextEdit', });
lyr_Benfeitorias_1.set('fieldImages', {'fid': 'TextEdit', 'TIPO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Estradas_internas_2.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_hidrografia_3.set('fieldImages', {'fid': 'TextEdit', 'COD_IMOVEL': 'TextEdit', 'ID': 'TextEdit', });
lyr_Limites_Alvorada_4.set('fieldImages', {'fid': 'TextEdit', 'COD_IMOVEL': 'TextEdit', 'ID': 'TextEdit', });
lyr_Regeneracao_5.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RL_6.set('fieldImages', {'fid': 'TextEdit', 'COD_IMOVEL': 'TextEdit', 'ID': 'TextEdit', });
lyr_soja_7.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Utilidade_publica_8.set('fieldImages', {'fid': '', 'TIPO': '', 'AREA_HA': '', });
lyr_VNR_9.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_APP_0.set('fieldLabels', {'fid': 'no label', 'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_Benfeitorias_1.set('fieldLabels', {'fid': 'no label', 'TIPO': 'no label', 'AREA_HA': 'no label', });
lyr_Estradas_internas_2.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_hidrografia_3.set('fieldLabels', {'fid': 'no label', 'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_Limites_Alvorada_4.set('fieldLabels', {'fid': 'no label', 'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_Regeneracao_5.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_RL_6.set('fieldLabels', {'fid': 'no label', 'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_soja_7.set('fieldLabels', {'fid': 'no label', 'Talhao': 'no label', 'AREA_HA': 'no label', });
lyr_Utilidade_publica_8.set('fieldLabels', {'fid': 'no label', 'TIPO': 'no label', 'AREA_HA': 'no label', });
lyr_VNR_9.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_VNR_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});