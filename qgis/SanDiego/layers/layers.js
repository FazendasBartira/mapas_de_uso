var wms_layers = [];

var lyr_NDVI_Fevereiro_2023_1_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Fevereiro_2023_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Fevereiro_2023_1_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5893502.691471, -2175472.435291, -5874546.139391, -2157079.712396]
                            })
                        });
var lyr_NDVI_Fevereiro_2023_2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Fevereiro_2023_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Fevereiro_2023_2_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5893504.006382, -2175472.352098, -5874550.022383, -2157078.748908]
                            })
                        });
var lyr_NDVI_Fevereiro_2023_3_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Fevereiro_2023_3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Fevereiro_2023_3_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5893506.384402, -2175472.972560, -5874548.517848, -2157078.974015]
                            })
                        });
var lyr_RGB_Fevereiro_2023_1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGB_Fevereiro_2023_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGB_Fevereiro_2023_1_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5893586.296100, -2170123.669700, -5888617.889300, -2165160.040200]
                            })
                        });
var lyr_RGB_Fevereiro_2023_2_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGB_Fevereiro_2023_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGB_Fevereiro_2023_2_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5889296.267900, -2175827.783000, -5878131.684500, -2171599.859800]
                            })
                        });
var lyr_RGB_Fevereiro_2023_3_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGB_Fevereiro_2023_3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGB_Fevereiro_2023_3_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5890786.790000, -2173515.562900, -5873975.421100, -2156599.093000]
                            })
                        });
var format_San_DiegoAgricultura_6 = new ol.format.GeoJSON();
var features_San_DiegoAgricultura_6 = format_San_DiegoAgricultura_6.readFeatures(json_San_DiegoAgricultura_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_San_DiegoAgricultura_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_San_DiegoAgricultura_6.addFeatures(features_San_DiegoAgricultura_6);
var lyr_San_DiegoAgricultura_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_San_DiegoAgricultura_6, 
                style: style_San_DiegoAgricultura_6,
                interactive: true,
                title: '<img src="styles/legend/San_DiegoAgricultura_6.png" /> San_Diego Agricultura'
            });
var format_Benfeitorias_7 = new ol.format.GeoJSON();
var features_Benfeitorias_7 = format_Benfeitorias_7.readFeatures(json_Benfeitorias_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benfeitorias_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benfeitorias_7.addFeatures(features_Benfeitorias_7);
var lyr_Benfeitorias_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benfeitorias_7, 
                style: style_Benfeitorias_7,
                interactive: true,
                title: '<img src="styles/legend/Benfeitorias_7.png" /> Benfeitorias'
            });
var format_Estradas_internas_8 = new ol.format.GeoJSON();
var features_Estradas_internas_8 = format_Estradas_internas_8.readFeatures(json_Estradas_internas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_internas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_internas_8.addFeatures(features_Estradas_internas_8);
var lyr_Estradas_internas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estradas_internas_8, 
                style: style_Estradas_internas_8,
                interactive: true,
                title: '<img src="styles/legend/Estradas_internas_8.png" /> Estradas_internas'
            });
var format_Servidao_9 = new ol.format.GeoJSON();
var features_Servidao_9 = format_Servidao_9.readFeatures(json_Servidao_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servidao_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servidao_9.addFeatures(features_Servidao_9);
var lyr_Servidao_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servidao_9, 
                style: style_Servidao_9,
                interactive: true,
                title: '<img src="styles/legend/Servidao_9.png" /> Servidao'
            });
var format_VN_abrir_10 = new ol.format.GeoJSON();
var features_VN_abrir_10 = format_VN_abrir_10.readFeatures(json_VN_abrir_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VN_abrir_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VN_abrir_10.addFeatures(features_VN_abrir_10);
var lyr_VN_abrir_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VN_abrir_10, 
                style: style_VN_abrir_10,
                interactive: true,
                title: '<img src="styles/legend/VN_abrir_10.png" /> VN_abrir'
            });
var format_VN_compensacao_11 = new ol.format.GeoJSON();
var features_VN_compensacao_11 = format_VN_compensacao_11.readFeatures(json_VN_compensacao_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VN_compensacao_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VN_compensacao_11.addFeatures(features_VN_compensacao_11);
var lyr_VN_compensacao_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VN_compensacao_11, 
                style: style_VN_compensacao_11,
                interactive: true,
                title: '<img src="styles/legend/VN_compensacao_11.png" /> VN_compensacao'
            });
var format_RL_12 = new ol.format.GeoJSON();
var features_RL_12 = format_RL_12.readFeatures(json_RL_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_12.addFeatures(features_RL_12);
var lyr_RL_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_12, 
                style: style_RL_12,
                interactive: true,
                title: '<img src="styles/legend/RL_12.png" /> RL'
            });
var format_Area_brejosa_13 = new ol.format.GeoJSON();
var features_Area_brejosa_13 = format_Area_brejosa_13.readFeatures(json_Area_brejosa_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_brejosa_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_brejosa_13.addFeatures(features_Area_brejosa_13);
var lyr_Area_brejosa_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_brejosa_13, 
                style: style_Area_brejosa_13,
                interactive: true,
                title: '<img src="styles/legend/Area_brejosa_13.png" /> Area_brejosa'
            });
var format_Barramento_14 = new ol.format.GeoJSON();
var features_Barramento_14 = format_Barramento_14.readFeatures(json_Barramento_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barramento_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barramento_14.addFeatures(features_Barramento_14);
var lyr_Barramento_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Barramento_14, 
                style: style_Barramento_14,
                interactive: true,
                title: '<img src="styles/legend/Barramento_14.png" /> Barramento'
            });
var format_San_DiegoPecuaria_15 = new ol.format.GeoJSON();
var features_San_DiegoPecuaria_15 = format_San_DiegoPecuaria_15.readFeatures(json_San_DiegoPecuaria_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_San_DiegoPecuaria_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_San_DiegoPecuaria_15.addFeatures(features_San_DiegoPecuaria_15);
var lyr_San_DiegoPecuaria_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_San_DiegoPecuaria_15, 
                style: style_San_DiegoPecuaria_15,
                interactive: true,
                title: '<img src="styles/legend/San_DiegoPecuaria_15.png" /> San_Diego Pecuaria'
            });
var format_San_DiegoRegeneracao_16 = new ol.format.GeoJSON();
var features_San_DiegoRegeneracao_16 = format_San_DiegoRegeneracao_16.readFeatures(json_San_DiegoRegeneracao_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_San_DiegoRegeneracao_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_San_DiegoRegeneracao_16.addFeatures(features_San_DiegoRegeneracao_16);
var lyr_San_DiegoRegeneracao_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_San_DiegoRegeneracao_16, 
                style: style_San_DiegoRegeneracao_16,
                interactive: true,
                title: '<img src="styles/legend/San_DiegoRegeneracao_16.png" /> San_Diego Regeneracao'
            });
var format_San_DiegoEstradas_internas_17 = new ol.format.GeoJSON();
var features_San_DiegoEstradas_internas_17 = format_San_DiegoEstradas_internas_17.readFeatures(json_San_DiegoEstradas_internas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_San_DiegoEstradas_internas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_San_DiegoEstradas_internas_17.addFeatures(features_San_DiegoEstradas_internas_17);
var lyr_San_DiegoEstradas_internas_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_San_DiegoEstradas_internas_17, 
                style: style_San_DiegoEstradas_internas_17,
                interactive: true,
                title: '<img src="styles/legend/San_DiegoEstradas_internas_17.png" /> San_Diego Estradas_internas'
            });
var format_San_DiegoAPP_18 = new ol.format.GeoJSON();
var features_San_DiegoAPP_18 = format_San_DiegoAPP_18.readFeatures(json_San_DiegoAPP_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_San_DiegoAPP_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_San_DiegoAPP_18.addFeatures(features_San_DiegoAPP_18);
var lyr_San_DiegoAPP_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_San_DiegoAPP_18, 
                style: style_San_DiegoAPP_18,
                interactive: true,
                title: '<img src="styles/legend/San_DiegoAPP_18.png" /> San_Diego APP'
            });
var format_RL_19 = new ol.format.GeoJSON();
var features_RL_19 = format_RL_19.readFeatures(json_RL_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_19.addFeatures(features_RL_19);
var lyr_RL_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_19, 
                style: style_RL_19,
                interactive: true,
                title: '<img src="styles/legend/RL_19.png" /> RL'
            });
var format_Regeneracao_20 = new ol.format.GeoJSON();
var features_Regeneracao_20 = format_Regeneracao_20.readFeatures(json_Regeneracao_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regeneracao_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regeneracao_20.addFeatures(features_Regeneracao_20);
var lyr_Regeneracao_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regeneracao_20, 
                style: style_Regeneracao_20,
                interactive: true,
                title: '<img src="styles/legend/Regeneracao_20.png" /> Regeneracao'
            });
var format_Estradas_internas_21 = new ol.format.GeoJSON();
var features_Estradas_internas_21 = format_Estradas_internas_21.readFeatures(json_Estradas_internas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_internas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_internas_21.addFeatures(features_Estradas_internas_21);
var lyr_Estradas_internas_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estradas_internas_21, 
                style: style_Estradas_internas_21,
                interactive: true,
                title: '<img src="styles/legend/Estradas_internas_21.png" /> Estradas_internas'
            });
var format_Brejosa_22 = new ol.format.GeoJSON();
var features_Brejosa_22 = format_Brejosa_22.readFeatures(json_Brejosa_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brejosa_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brejosa_22.addFeatures(features_Brejosa_22);
var lyr_Brejosa_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brejosa_22, 
                style: style_Brejosa_22,
                interactive: true,
                title: '<img src="styles/legend/Brejosa_22.png" /> Brejosa'
            });
var format_Benfeitorias_23 = new ol.format.GeoJSON();
var features_Benfeitorias_23 = format_Benfeitorias_23.readFeatures(json_Benfeitorias_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benfeitorias_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benfeitorias_23.addFeatures(features_Benfeitorias_23);
var lyr_Benfeitorias_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benfeitorias_23, 
                style: style_Benfeitorias_23,
                interactive: true,
                title: '<img src="styles/legend/Benfeitorias_23.png" /> Benfeitorias'
            });
var format_Barramentos_24 = new ol.format.GeoJSON();
var features_Barramentos_24 = format_Barramentos_24.readFeatures(json_Barramentos_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barramentos_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barramentos_24.addFeatures(features_Barramentos_24);
var lyr_Barramentos_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Barramentos_24, 
                style: style_Barramentos_24,
                interactive: true,
                title: '<img src="styles/legend/Barramentos_24.png" /> Barramentos'
            });
var format_APP_25 = new ol.format.GeoJSON();
var features_APP_25 = format_APP_25.readFeatures(json_APP_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_25.addFeatures(features_APP_25);
var lyr_APP_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_25, 
                style: style_APP_25,
                interactive: true,
                title: '<img src="styles/legend/APP_25.png" /> APP'
            });
var format_Lavoura_26 = new ol.format.GeoJSON();
var features_Lavoura_26 = format_Lavoura_26.readFeatures(json_Lavoura_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lavoura_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lavoura_26.addFeatures(features_Lavoura_26);
var lyr_Lavoura_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lavoura_26, 
                style: style_Lavoura_26,
                interactive: true,
                title: '<img src="styles/legend/Lavoura_26.png" /> Lavoura'
            });
var format_VNR_27 = new ol.format.GeoJSON();
var features_VNR_27 = format_VNR_27.readFeatures(json_VNR_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNR_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNR_27.addFeatures(features_VNR_27);
var lyr_VNR_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNR_27, 
                style: style_VNR_27,
                interactive: true,
                title: '<img src="styles/legend/VNR_27.png" /> VNR'
            });
var format_RL_28 = new ol.format.GeoJSON();
var features_RL_28 = format_RL_28.readFeatures(json_RL_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_28.addFeatures(features_RL_28);
var lyr_RL_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_28, 
                style: style_RL_28,
                interactive: true,
                title: '<img src="styles/legend/RL_28.png" /> RL'
            });
var format_Regeneracao_29 = new ol.format.GeoJSON();
var features_Regeneracao_29 = format_Regeneracao_29.readFeatures(json_Regeneracao_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regeneracao_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regeneracao_29.addFeatures(features_Regeneracao_29);
var lyr_Regeneracao_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regeneracao_29, 
                style: style_Regeneracao_29,
                interactive: true,
                title: '<img src="styles/legend/Regeneracao_29.png" /> Regeneracao'
            });
var format_Lavoura_30 = new ol.format.GeoJSON();
var features_Lavoura_30 = format_Lavoura_30.readFeatures(json_Lavoura_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lavoura_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lavoura_30.addFeatures(features_Lavoura_30);
var lyr_Lavoura_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lavoura_30, 
                style: style_Lavoura_30,
                interactive: true,
                title: '<img src="styles/legend/Lavoura_30.png" /> Lavoura'
            });
var format_Estradas_internas_31 = new ol.format.GeoJSON();
var features_Estradas_internas_31 = format_Estradas_internas_31.readFeatures(json_Estradas_internas_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_internas_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_internas_31.addFeatures(features_Estradas_internas_31);
var lyr_Estradas_internas_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estradas_internas_31, 
                style: style_Estradas_internas_31,
                interactive: true,
                title: '<img src="styles/legend/Estradas_internas_31.png" /> Estradas_internas'
            });
var format_Area_umida_32 = new ol.format.GeoJSON();
var features_Area_umida_32 = format_Area_umida_32.readFeatures(json_Area_umida_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_umida_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_umida_32.addFeatures(features_Area_umida_32);
var lyr_Area_umida_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_umida_32, 
                style: style_Area_umida_32,
                interactive: true,
                title: '<img src="styles/legend/Area_umida_32.png" /> Area_umida'
            });
var format_APP_33 = new ol.format.GeoJSON();
var features_APP_33 = format_APP_33.readFeatures(json_APP_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_33.addFeatures(features_APP_33);
var lyr_APP_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_33, 
                style: style_APP_33,
                interactive: true,
                title: '<img src="styles/legend/APP_33.png" /> APP'
            });
var format_Sede_Agricola_34 = new ol.format.GeoJSON();
var features_Sede_Agricola_34 = format_Sede_Agricola_34.readFeatures(json_Sede_Agricola_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sede_Agricola_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sede_Agricola_34.addFeatures(features_Sede_Agricola_34);
var lyr_Sede_Agricola_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sede_Agricola_34, 
                style: style_Sede_Agricola_34,
                interactive: true,
                title: '<img src="styles/legend/Sede_Agricola_34.png" /> Sede_Agricola'
            });
var format_SAN_DIEGO_35 = new ol.format.GeoJSON();
var features_SAN_DIEGO_35 = format_SAN_DIEGO_35.readFeatures(json_SAN_DIEGO_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAN_DIEGO_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAN_DIEGO_35.addFeatures(features_SAN_DIEGO_35);
var lyr_SAN_DIEGO_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAN_DIEGO_35, 
                style: style_SAN_DIEGO_35,
                interactive: true,
                title: '<img src="styles/legend/SAN_DIEGO_35.png" /> SAN_DIEGO'
            });
var group_Pedra_Branca = new ol.layer.Group({
                                layers: [lyr_VNR_27,lyr_RL_28,lyr_Regeneracao_29,lyr_Lavoura_30,lyr_Estradas_internas_31,lyr_Area_umida_32,lyr_APP_33,],
                                title: "Pedra_Branca"});
var group_Miramontes = new ol.layer.Group({
                                layers: [lyr_RL_19,lyr_Regeneracao_20,lyr_Estradas_internas_21,lyr_Brejosa_22,lyr_Benfeitorias_23,lyr_Barramentos_24,lyr_APP_25,lyr_Lavoura_26,],
                                title: "Miramontes"});
var group_San_Diego = new ol.layer.Group({
                                layers: [lyr_San_DiegoAgricultura_6,lyr_Benfeitorias_7,lyr_Estradas_internas_8,lyr_Servidao_9,lyr_VN_abrir_10,lyr_VN_compensacao_11,lyr_RL_12,lyr_Area_brejosa_13,lyr_Barramento_14,lyr_San_DiegoPecuaria_15,lyr_San_DiegoRegeneracao_16,lyr_San_DiegoEstradas_internas_17,lyr_San_DiegoAPP_18,],
                                title: "San_Diego"});
var group_Cores_verdadeiras = new ol.layer.Group({
                                layers: [lyr_RGB_Fevereiro_2023_1_3,lyr_RGB_Fevereiro_2023_2_4,lyr_RGB_Fevereiro_2023_3_5,],
                                title: "Cores_verdadeiras"});
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_NDVI_Fevereiro_2023_1_0,lyr_NDVI_Fevereiro_2023_2_1,lyr_NDVI_Fevereiro_2023_3_2,],
                                title: "NDVI"});

lyr_NDVI_Fevereiro_2023_1_0.setVisible(true);lyr_NDVI_Fevereiro_2023_2_1.setVisible(true);lyr_NDVI_Fevereiro_2023_3_2.setVisible(true);lyr_RGB_Fevereiro_2023_1_3.setVisible(true);lyr_RGB_Fevereiro_2023_2_4.setVisible(true);lyr_RGB_Fevereiro_2023_3_5.setVisible(true);lyr_San_DiegoAgricultura_6.setVisible(true);lyr_Benfeitorias_7.setVisible(true);lyr_Estradas_internas_8.setVisible(true);lyr_Servidao_9.setVisible(true);lyr_VN_abrir_10.setVisible(true);lyr_VN_compensacao_11.setVisible(true);lyr_RL_12.setVisible(true);lyr_Area_brejosa_13.setVisible(true);lyr_Barramento_14.setVisible(true);lyr_San_DiegoPecuaria_15.setVisible(true);lyr_San_DiegoRegeneracao_16.setVisible(true);lyr_San_DiegoEstradas_internas_17.setVisible(true);lyr_San_DiegoAPP_18.setVisible(true);lyr_RL_19.setVisible(true);lyr_Regeneracao_20.setVisible(true);lyr_Estradas_internas_21.setVisible(true);lyr_Brejosa_22.setVisible(true);lyr_Benfeitorias_23.setVisible(true);lyr_Barramentos_24.setVisible(true);lyr_APP_25.setVisible(true);lyr_Lavoura_26.setVisible(true);lyr_VNR_27.setVisible(true);lyr_RL_28.setVisible(true);lyr_Regeneracao_29.setVisible(true);lyr_Lavoura_30.setVisible(true);lyr_Estradas_internas_31.setVisible(true);lyr_Area_umida_32.setVisible(true);lyr_APP_33.setVisible(true);lyr_Sede_Agricola_34.setVisible(true);lyr_SAN_DIEGO_35.setVisible(true);
var layersList = [group_NDVI,group_Cores_verdadeiras,group_San_Diego,group_Miramontes,group_Pedra_Branca,lyr_Sede_Agricola_34,lyr_SAN_DIEGO_35];
lyr_San_DiegoAgricultura_6.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_Benfeitorias_7.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Estradas_internas_8.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'AREA_HA': 'AREA_HA', });
lyr_Servidao_9.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_VN_abrir_10.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_VN_compensacao_11.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_RL_12.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Area_brejosa_13.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Barramento_14.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_San_DiegoPecuaria_15.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_San_DiegoRegeneracao_16.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_San_DiegoEstradas_internas_17.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'AREA_HA': 'AREA_HA', });
lyr_San_DiegoAPP_18.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_RL_19.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Regeneracao_20.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_Estradas_internas_21.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_Brejosa_22.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Benfeitorias_23.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_Barramentos_24.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_APP_25.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Lavoura_26.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_VNR_27.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_RL_28.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Regeneracao_29.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'AREA_HA': 'AREA_HA', });
lyr_Lavoura_30.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_Estradas_internas_31.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', 'AREA_HA': 'AREA_HA', });
lyr_Area_umida_32.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'AREA_HA': 'AREA_HA', });
lyr_APP_33.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'lagura': 'lagura', 'larguraapp': 'larguraapp', });
lyr_Sede_Agricola_34.set('fieldAliases', {'fid': 'fid', });
lyr_SAN_DIEGO_35.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_San_DiegoAgricultura_6.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': '', });
lyr_Benfeitorias_7.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_Estradas_internas_8.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'AREA_HA': '', });
lyr_Servidao_9.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_VN_abrir_10.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_VN_compensacao_11.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_RL_12.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_Area_brejosa_13.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_Barramento_14.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_San_DiegoPecuaria_15.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_San_DiegoRegeneracao_16.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', 'AREA_HA': '', });
lyr_San_DiegoEstradas_internas_17.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'AREA_HA': '', });
lyr_San_DiegoAPP_18.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_RL_19.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_Regeneracao_20.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', 'AREA_HA': '', });
lyr_Estradas_internas_21.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', 'AREA_HA': '', });
lyr_Brejosa_22.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_Benfeitorias_23.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', 'AREA_HA': '', });
lyr_Barramentos_24.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_APP_25.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_Lavoura_26.set('fieldImages', {'fid': 'TextEdit', 'classe': 'Range', 'lagura': 'TextEdit', 'larguraapp': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_VNR_27.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_RL_28.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_Regeneracao_29.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'AREA_HA': '', });
lyr_Lavoura_30.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Estradas_internas_31.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', 'AREA_HA': '', });
lyr_Area_umida_32.set('fieldImages', {'fid': '', 'classe': '', 'AREA_HA': '', });
lyr_APP_33.set('fieldImages', {'fid': '', 'classe': '', 'lagura': '', 'larguraapp': '', });
lyr_Sede_Agricola_34.set('fieldImages', {'fid': 'TextEdit', });
lyr_SAN_DIEGO_35.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_San_DiegoAgricultura_6.set('fieldLabels', {});
lyr_Benfeitorias_7.set('fieldLabels', {});
lyr_Estradas_internas_8.set('fieldLabels', {});
lyr_Servidao_9.set('fieldLabels', {});
lyr_VN_abrir_10.set('fieldLabels', {});
lyr_VN_compensacao_11.set('fieldLabels', {});
lyr_RL_12.set('fieldLabels', {});
lyr_Area_brejosa_13.set('fieldLabels', {});
lyr_Barramento_14.set('fieldLabels', {});
lyr_San_DiegoPecuaria_15.set('fieldLabels', {});
lyr_San_DiegoRegeneracao_16.set('fieldLabels', {});
lyr_San_DiegoEstradas_internas_17.set('fieldLabels', {});
lyr_San_DiegoAPP_18.set('fieldLabels', {});
lyr_RL_19.set('fieldLabels', {});
lyr_Regeneracao_20.set('fieldLabels', {});
lyr_Estradas_internas_21.set('fieldLabels', {});
lyr_Brejosa_22.set('fieldLabels', {});
lyr_Benfeitorias_23.set('fieldLabels', {});
lyr_Barramentos_24.set('fieldLabels', {});
lyr_APP_25.set('fieldLabels', {});
lyr_Lavoura_26.set('fieldLabels', {});
lyr_VNR_27.set('fieldLabels', {});
lyr_RL_28.set('fieldLabels', {});
lyr_Regeneracao_29.set('fieldLabels', {});
lyr_Lavoura_30.set('fieldLabels', {});
lyr_Estradas_internas_31.set('fieldLabels', {});
lyr_Area_umida_32.set('fieldLabels', {});
lyr_APP_33.set('fieldLabels', {});
lyr_Sede_Agricola_34.set('fieldLabels', {'fid': 'no label', });
lyr_SAN_DIEGO_35.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SAN_DIEGO_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});