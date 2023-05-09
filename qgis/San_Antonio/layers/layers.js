var wms_layers = [];

var lyr_NDVI_MARCO_2023_3_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_MARCO_2023_3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_MARCO_2023_3_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6451901.459930, -1625419.074270, -6433308.152800, -1608483.495200]
                            })
                        });
var lyr_NDVI_MARCO_2023_2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_MARCO_2023_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_MARCO_2023_2_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6451901.459890, -1625419.074280, -6433308.152850, -1608483.495050]
                            })
                        });
var lyr_NDVI_MARCO_2023_1_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_MARCO_2023_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_MARCO_2023_1_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6451901.459790, -1625419.074340, -6433308.152800, -1608483.495250]
                            })
                        });
var lyr_CORES_VERDADEIRAS_MARCO_2023_1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "CORES_VERDADEIRAS_MARCO_2023_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CORES_VERDADEIRAS_MARCO_2023_1_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6439418.337700, -1621286.697500, -6432973.740800, -1607394.267600]
                            })
                        });
var lyr_CORES_VERDADEIRAS_MARCO_2023_2_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "CORES_VERDADEIRAS_MARCO_2023_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CORES_VERDADEIRAS_MARCO_2023_2_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6445499.858800, -1626059.234400, -6440669.994100, -1623321.833300]
                            })
                        });
var lyr_CORES_VERDADEIRAS_MARCO_2023_3tif_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "CORES_VERDADEIRAS_MARCO_2023_3tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CORES_VERDADEIRAS_MARCO_2023_3tif_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6452928.582500, -1625361.746500, -6436456.402900, -1607981.877200]
                            })
                        });
var format_APP_6 = new ol.format.GeoJSON();
var features_APP_6 = format_APP_6.readFeatures(json_APP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_6.addFeatures(features_APP_6);
var lyr_APP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_6, 
                style: style_APP_6,
                interactive: true,
                title: '<img src="styles/legend/APP_6.png" /> APP'
            });
var format_Area_em_regeneracao_7 = new ol.format.GeoJSON();
var features_Area_em_regeneracao_7 = format_Area_em_regeneracao_7.readFeatures(json_Area_em_regeneracao_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_em_regeneracao_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_em_regeneracao_7.addFeatures(features_Area_em_regeneracao_7);
var lyr_Area_em_regeneracao_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_em_regeneracao_7, 
                style: style_Area_em_regeneracao_7,
                interactive: true,
                title: '<img src="styles/legend/Area_em_regeneracao_7.png" /> Area_em_regeneracao'
            });
var format_Benfeitorias_8 = new ol.format.GeoJSON();
var features_Benfeitorias_8 = format_Benfeitorias_8.readFeatures(json_Benfeitorias_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benfeitorias_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benfeitorias_8.addFeatures(features_Benfeitorias_8);
var lyr_Benfeitorias_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benfeitorias_8, 
                style: style_Benfeitorias_8,
                interactive: true,
                title: '<img src="styles/legend/Benfeitorias_8.png" /> Benfeitorias'
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
var format_eucalipto_10 = new ol.format.GeoJSON();
var features_eucalipto_10 = format_eucalipto_10.readFeatures(json_eucalipto_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eucalipto_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eucalipto_10.addFeatures(features_eucalipto_10);
var lyr_eucalipto_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_eucalipto_10, 
                style: style_eucalipto_10,
                interactive: true,
                title: '<img src="styles/legend/eucalipto_10.png" /> eucalipto'
            });
var format_Agricultura_11 = new ol.format.GeoJSON();
var features_Agricultura_11 = format_Agricultura_11.readFeatures(json_Agricultura_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agricultura_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agricultura_11.addFeatures(features_Agricultura_11);
var lyr_Agricultura_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agricultura_11, 
                style: style_Agricultura_11,
                interactive: true,
                title: '<img src="styles/legend/Agricultura_11.png" /> Agricultura'
            });
var format_Pecuaria_12 = new ol.format.GeoJSON();
var features_Pecuaria_12 = format_Pecuaria_12.readFeatures(json_Pecuaria_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pecuaria_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pecuaria_12.addFeatures(features_Pecuaria_12);
var lyr_Pecuaria_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pecuaria_12, 
                style: style_Pecuaria_12,
                interactive: true,
                title: '<img src="styles/legend/Pecuaria_12.png" /> Pecuaria'
            });
var format_Reserva_legal_13 = new ol.format.GeoJSON();
var features_Reserva_legal_13 = format_Reserva_legal_13.readFeatures(json_Reserva_legal_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reserva_legal_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reserva_legal_13.addFeatures(features_Reserva_legal_13);
var lyr_Reserva_legal_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reserva_legal_13, 
                style: style_Reserva_legal_13,
                interactive: true,
                title: '<img src="styles/legend/Reserva_legal_13.png" /> Reserva_legal'
            });
var format_Reservatorio_artificial_14 = new ol.format.GeoJSON();
var features_Reservatorio_artificial_14 = format_Reservatorio_artificial_14.readFeatures(json_Reservatorio_artificial_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reservatorio_artificial_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservatorio_artificial_14.addFeatures(features_Reservatorio_artificial_14);
var lyr_Reservatorio_artificial_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reservatorio_artificial_14, 
                style: style_Reservatorio_artificial_14,
                interactive: true,
                title: '<img src="styles/legend/Reservatorio_artificial_14.png" /> Reservatorio_artificial'
            });
var format_Rio_ate_10m_15 = new ol.format.GeoJSON();
var features_Rio_ate_10m_15 = format_Rio_ate_10m_15.readFeatures(json_Rio_ate_10m_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rio_ate_10m_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_ate_10m_15.addFeatures(features_Rio_ate_10m_15);
var lyr_Rio_ate_10m_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rio_ate_10m_15, 
                style: style_Rio_ate_10m_15,
                interactive: true,
                title: '<img src="styles/legend/Rio_ate_10m_15.png" /> Rio_ate_10m'
            });
var format_Vegetacao_abertura_16 = new ol.format.GeoJSON();
var features_Vegetacao_abertura_16 = format_Vegetacao_abertura_16.readFeatures(json_Vegetacao_abertura_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vegetacao_abertura_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetacao_abertura_16.addFeatures(features_Vegetacao_abertura_16);
var lyr_Vegetacao_abertura_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vegetacao_abertura_16, 
                style: style_Vegetacao_abertura_16,
                interactive: true,
                title: '<img src="styles/legend/Vegetacao_abertura_16.png" /> Vegetacao_abertura'
            });
var format_Pista_aviao_17 = new ol.format.GeoJSON();
var features_Pista_aviao_17 = format_Pista_aviao_17.readFeatures(json_Pista_aviao_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pista_aviao_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pista_aviao_17.addFeatures(features_Pista_aviao_17);
var lyr_Pista_aviao_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pista_aviao_17, 
                style: style_Pista_aviao_17,
                interactive: true,
                title: '<img src="styles/legend/Pista_aviao_17.png" /> Pista_aviao'
            });
var format_Sede_agricola_18 = new ol.format.GeoJSON();
var features_Sede_agricola_18 = format_Sede_agricola_18.readFeatures(json_Sede_agricola_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sede_agricola_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sede_agricola_18.addFeatures(features_Sede_agricola_18);
var lyr_Sede_agricola_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sede_agricola_18, 
                style: style_Sede_agricola_18,
                interactive: true,
                title: '<img src="styles/legend/Sede_agricola_18.png" /> Sede_agricola'
            });
var format_Limites_San_Antonio_19 = new ol.format.GeoJSON();
var features_Limites_San_Antonio_19 = format_Limites_San_Antonio_19.readFeatures(json_Limites_San_Antonio_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_San_Antonio_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_San_Antonio_19.addFeatures(features_Limites_San_Antonio_19);
var lyr_Limites_San_Antonio_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limites_San_Antonio_19, 
                style: style_Limites_San_Antonio_19,
                interactive: true,
                title: '<img src="styles/legend/Limites_San_Antonio_19.png" /> Limites_San_Antonio'
            });
var group_Coresverdadeiras = new ol.layer.Group({
                                layers: [lyr_CORES_VERDADEIRAS_MARCO_2023_1_3,lyr_CORES_VERDADEIRAS_MARCO_2023_2_4,lyr_CORES_VERDADEIRAS_MARCO_2023_3tif_5,],
                                title: "Cores verdadeiras"});
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_NDVI_MARCO_2023_3_0,lyr_NDVI_MARCO_2023_2_1,lyr_NDVI_MARCO_2023_1_2,],
                                title: "NDVI"});

lyr_NDVI_MARCO_2023_3_0.setVisible(true);lyr_NDVI_MARCO_2023_2_1.setVisible(true);lyr_NDVI_MARCO_2023_1_2.setVisible(true);lyr_CORES_VERDADEIRAS_MARCO_2023_1_3.setVisible(true);lyr_CORES_VERDADEIRAS_MARCO_2023_2_4.setVisible(true);lyr_CORES_VERDADEIRAS_MARCO_2023_3tif_5.setVisible(true);lyr_APP_6.setVisible(true);lyr_Area_em_regeneracao_7.setVisible(true);lyr_Benfeitorias_8.setVisible(true);lyr_Estradas_internas_9.setVisible(true);lyr_eucalipto_10.setVisible(true);lyr_Agricultura_11.setVisible(true);lyr_Pecuaria_12.setVisible(true);lyr_Reserva_legal_13.setVisible(true);lyr_Reservatorio_artificial_14.setVisible(true);lyr_Rio_ate_10m_15.setVisible(true);lyr_Vegetacao_abertura_16.setVisible(true);lyr_Pista_aviao_17.setVisible(true);lyr_Sede_agricola_18.setVisible(true);lyr_Limites_San_Antonio_19.setVisible(true);
var layersList = [group_NDVI,group_Coresverdadeiras,lyr_APP_6,lyr_Area_em_regeneracao_7,lyr_Benfeitorias_8,lyr_Estradas_internas_9,lyr_eucalipto_10,lyr_Agricultura_11,lyr_Pecuaria_12,lyr_Reserva_legal_13,lyr_Reservatorio_artificial_14,lyr_Rio_ate_10m_15,lyr_Vegetacao_abertura_16,lyr_Pista_aviao_17,lyr_Sede_agricola_18,lyr_Limites_San_Antonio_19];
lyr_APP_6.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', 'AREA': 'AREA', });
lyr_Area_em_regeneracao_7.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Benfeitorias_8.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Estradas_internas_9.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_eucalipto_10.set('fieldAliases', {'fid': 'fid', 'new_field': 'new_field', 'AREA_HA': 'AREA_HA', });
lyr_Agricultura_11.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_Pecuaria_12.set('fieldAliases', {'fid': 'fid', 'M': 'M', 'AREA_HA': 'AREA_HA', });
lyr_Reserva_legal_13.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Reservatorio_artificial_14.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'AREA_HA': 'AREA_HA', });
lyr_Rio_ate_10m_15.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Vegetacao_abertura_16.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Pista_aviao_17.set('fieldAliases', {'fid': 'fid', });
lyr_Sede_agricola_18.set('fieldAliases', {'fid': 'fid', });
lyr_Limites_San_Antonio_19.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_APP_6.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Area_em_regeneracao_7.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Benfeitorias_8.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Estradas_internas_9.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_eucalipto_10.set('fieldImages', {'fid': '', 'new_field': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Agricultura_11.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Pecuaria_12.set('fieldImages', {'fid': 'TextEdit', 'M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Reserva_legal_13.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Reservatorio_artificial_14.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Rio_ate_10m_15.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Vegetacao_abertura_16.set('fieldImages', {'fid': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Pista_aviao_17.set('fieldImages', {'fid': '', });
lyr_Sede_agricola_18.set('fieldImages', {'fid': '', });
lyr_Limites_San_Antonio_19.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_APP_6.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', 'AREA': 'no label', });
lyr_Area_em_regeneracao_7.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_Benfeitorias_8.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_Estradas_internas_9.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_eucalipto_10.set('fieldLabels', {'fid': 'no label', 'new_field': 'no label', 'AREA_HA': 'no label', });
lyr_Agricultura_11.set('fieldLabels', {'fid': 'no label', 'Talhao': 'no label', 'AREA_HA': 'no label', });
lyr_Pecuaria_12.set('fieldLabels', {'fid': 'no label', 'M': 'no label', 'AREA_HA': 'no label', });
lyr_Reserva_legal_13.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_Reservatorio_artificial_14.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'AREA_HA': 'no label', });
lyr_Rio_ate_10m_15.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_Vegetacao_abertura_16.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_Pista_aviao_17.set('fieldLabels', {'fid': 'no label', });
lyr_Sede_agricola_18.set('fieldLabels', {'fid': 'no label', });
lyr_Limites_San_Antonio_19.set('fieldLabels', {'fid': 'no label', 'AREA_HA': 'no label', });
lyr_Limites_San_Antonio_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});