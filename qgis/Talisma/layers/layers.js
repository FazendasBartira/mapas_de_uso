var wms_layers = [];

var lyr_NDVI_marco_2023_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_marco_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_marco_2023_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5475021.906600, -1453454.869900, -5445598.428000, -1428154.213600]
                            })
                        });
var lyr_Cores_verdadeiras_marco_2023_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cores_verdadeiras_marco_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Cores_verdadeiras_marco_2023_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5475021.906600, -1453454.869900, -5445598.428000, -1428154.213600]
                            })
                        });
var format_VNR_2 = new ol.format.GeoJSON();
var features_VNR_2 = format_VNR_2.readFeatures(json_VNR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNR_2.addFeatures(features_VNR_2);
var lyr_VNR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNR_2, 
                style: style_VNR_2,
                interactive: true,
                title: '<img src="styles/legend/VNR_2.png" /> VNR'
            });
var format_Talisma_Onca_Branca_3 = new ol.format.GeoJSON();
var features_Talisma_Onca_Branca_3 = format_Talisma_Onca_Branca_3.readFeatures(json_Talisma_Onca_Branca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Talisma_Onca_Branca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Talisma_Onca_Branca_3.addFeatures(features_Talisma_Onca_Branca_3);
var lyr_Talisma_Onca_Branca_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Talisma_Onca_Branca_3, 
                style: style_Talisma_Onca_Branca_3,
                interactive: true,
                title: '<img src="styles/legend/Talisma_Onca_Branca_3.png" /> Talisma_Onca_Branca'
            });
var format_RLS_4 = new ol.format.GeoJSON();
var features_RLS_4 = format_RLS_4.readFeatures(json_RLS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RLS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RLS_4.addFeatures(features_RLS_4);
var lyr_RLS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RLS_4, 
                style: style_RLS_4,
                interactive: true,
                title: '<img src="styles/legend/RLS_4.png" /> RLS'
            });
var format_regeneracao_5 = new ol.format.GeoJSON();
var features_regeneracao_5 = format_regeneracao_5.readFeatures(json_regeneracao_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regeneracao_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regeneracao_5.addFeatures(features_regeneracao_5);
var lyr_regeneracao_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regeneracao_5, 
                style: style_regeneracao_5,
                interactive: true,
                title: '<img src="styles/legend/regeneracao_5.png" /> regeneracao'
            });
var format_HIDROGRAFIA_6 = new ol.format.GeoJSON();
var features_HIDROGRAFIA_6 = format_HIDROGRAFIA_6.readFeatures(json_HIDROGRAFIA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDROGRAFIA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROGRAFIA_6.addFeatures(features_HIDROGRAFIA_6);
var lyr_HIDROGRAFIA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HIDROGRAFIA_6, 
                style: style_HIDROGRAFIA_6,
                interactive: true,
                title: '<img src="styles/legend/HIDROGRAFIA_6.png" /> HIDROGRAFIA'
            });
var format_Estradas_internas_7 = new ol.format.GeoJSON();
var features_Estradas_internas_7 = format_Estradas_internas_7.readFeatures(json_Estradas_internas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_internas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_internas_7.addFeatures(features_Estradas_internas_7);
var lyr_Estradas_internas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estradas_internas_7, 
                style: style_Estradas_internas_7,
                interactive: true,
                title: '<img src="styles/legend/Estradas_internas_7.png" /> Estradas_internas'
            });
var format_Area_imovel_8 = new ol.format.GeoJSON();
var features_Area_imovel_8 = format_Area_imovel_8.readFeatures(json_Area_imovel_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_imovel_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_imovel_8.addFeatures(features_Area_imovel_8);
var lyr_Area_imovel_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_imovel_8, 
                style: style_Area_imovel_8,
                interactive: true,
                title: '<img src="styles/legend/Area_imovel_8.png" /> Area_imovel'
            });
var format_APP_9 = new ol.format.GeoJSON();
var features_APP_9 = format_APP_9.readFeatures(json_APP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_9.addFeatures(features_APP_9);
var lyr_APP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_9, 
                style: style_APP_9,
                interactive: true,
                title: '<img src="styles/legend/APP_9.png" /> APP'
            });
var format_APD_10 = new ol.format.GeoJSON();
var features_APD_10 = format_APD_10.readFeatures(json_APD_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APD_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APD_10.addFeatures(features_APD_10);
var lyr_APD_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APD_10, 
                style: style_APD_10,
                interactive: true,
                title: '<img src="styles/legend/APD_10.png" /> APD'
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
var format_Regeneracao_13 = new ol.format.GeoJSON();
var features_Regeneracao_13 = format_Regeneracao_13.readFeatures(json_Regeneracao_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regeneracao_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regeneracao_13.addFeatures(features_Regeneracao_13);
var lyr_Regeneracao_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regeneracao_13, 
                style: style_Regeneracao_13,
                interactive: true,
                title: '<img src="styles/legend/Regeneracao_13.png" /> Regeneracao'
            });
var format_RLS_14 = new ol.format.GeoJSON();
var features_RLS_14 = format_RLS_14.readFeatures(json_RLS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RLS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RLS_14.addFeatures(features_RLS_14);
var lyr_RLS_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RLS_14, 
                style: style_RLS_14,
                interactive: true,
                title: '<img src="styles/legend/RLS_14.png" /> R.L.S.'
            });
var format_Lavoura_15 = new ol.format.GeoJSON();
var features_Lavoura_15 = format_Lavoura_15.readFeatures(json_Lavoura_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lavoura_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lavoura_15.addFeatures(features_Lavoura_15);
var lyr_Lavoura_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lavoura_15, 
                style: style_Lavoura_15,
                interactive: true,
                title: '<img src="styles/legend/Lavoura_15.png" /> Lavoura'
            });
var format_Hidrografia_16 = new ol.format.GeoJSON();
var features_Hidrografia_16 = format_Hidrografia_16.readFeatures(json_Hidrografia_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_16.addFeatures(features_Hidrografia_16);
var lyr_Hidrografia_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hidrografia_16, 
                style: style_Hidrografia_16,
                interactive: true,
                title: '<img src="styles/legend/Hidrografia_16.png" /> Hidrografia'
            });
var format_Estradas_internas_17 = new ol.format.GeoJSON();
var features_Estradas_internas_17 = format_Estradas_internas_17.readFeatures(json_Estradas_internas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_internas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_internas_17.addFeatures(features_Estradas_internas_17);
var lyr_Estradas_internas_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estradas_internas_17, 
                style: style_Estradas_internas_17,
                interactive: true,
                title: '<img src="styles/legend/Estradas_internas_17.png" /> Estradas_internas'
            });
var format_Benfeitorias_18 = new ol.format.GeoJSON();
var features_Benfeitorias_18 = format_Benfeitorias_18.readFeatures(json_Benfeitorias_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benfeitorias_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benfeitorias_18.addFeatures(features_Benfeitorias_18);
var lyr_Benfeitorias_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benfeitorias_18, 
                style: style_Benfeitorias_18,
                interactive: true,
                title: '<img src="styles/legend/Benfeitorias_18.png" /> Benfeitorias'
            });
var format_Area_imovel_19 = new ol.format.GeoJSON();
var features_Area_imovel_19 = format_Area_imovel_19.readFeatures(json_Area_imovel_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_imovel_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_imovel_19.addFeatures(features_Area_imovel_19);
var lyr_Area_imovel_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_imovel_19, 
                style: style_Area_imovel_19,
                interactive: true,
                title: '<img src="styles/legend/Area_imovel_19.png" /> Area_imovel'
            });
var format_APPD_20 = new ol.format.GeoJSON();
var features_APPD_20 = format_APPD_20.readFeatures(json_APPD_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APPD_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPD_20.addFeatures(features_APPD_20);
var lyr_APPD_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APPD_20, 
                style: style_APPD_20,
                interactive: true,
                title: '<img src="styles/legend/APPD_20.png" /> APPD'
            });
var format_APP_21 = new ol.format.GeoJSON();
var features_APP_21 = format_APP_21.readFeatures(json_APP_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_21.addFeatures(features_APP_21);
var lyr_APP_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_21, 
                style: style_APP_21,
                interactive: true,
                title: '<img src="styles/legend/APP_21.png" /> APP'
            });
var format_VNR_22 = new ol.format.GeoJSON();
var features_VNR_22 = format_VNR_22.readFeatures(json_VNR_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNR_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNR_22.addFeatures(features_VNR_22);
var lyr_VNR_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNR_22, 
                style: style_VNR_22,
                interactive: true,
                title: '<img src="styles/legend/VNR_22.png" /> VNR'
            });
var format_Servidao_administrativa_23 = new ol.format.GeoJSON();
var features_Servidao_administrativa_23 = format_Servidao_administrativa_23.readFeatures(json_Servidao_administrativa_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servidao_administrativa_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servidao_administrativa_23.addFeatures(features_Servidao_administrativa_23);
var lyr_Servidao_administrativa_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servidao_administrativa_23, 
                style: style_Servidao_administrativa_23,
                interactive: true,
                title: '<img src="styles/legend/Servidao_administrativa_23.png" /> Servidao_administrativa'
            });
var format_RL_24 = new ol.format.GeoJSON();
var features_RL_24 = format_RL_24.readFeatures(json_RL_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_24.addFeatures(features_RL_24);
var lyr_RL_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_24, 
                style: style_RL_24,
                interactive: true,
                title: '<img src="styles/legend/RL_24.png" /> RL'
            });
var format_Regeneracao_25 = new ol.format.GeoJSON();
var features_Regeneracao_25 = format_Regeneracao_25.readFeatures(json_Regeneracao_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regeneracao_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regeneracao_25.addFeatures(features_Regeneracao_25);
var lyr_Regeneracao_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regeneracao_25, 
                style: style_Regeneracao_25,
                interactive: true,
                title: '<img src="styles/legend/Regeneracao_25.png" /> Regeneracao'
            });
var format_Estrada_interna_26 = new ol.format.GeoJSON();
var features_Estrada_interna_26 = format_Estrada_interna_26.readFeatures(json_Estrada_interna_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estrada_interna_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estrada_interna_26.addFeatures(features_Estrada_interna_26);
var lyr_Estrada_interna_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estrada_interna_26, 
                style: style_Estrada_interna_26,
                interactive: true,
                title: '<img src="styles/legend/Estrada_interna_26.png" /> Estrada_interna'
            });
var format_Curso_dagua_27 = new ol.format.GeoJSON();
var features_Curso_dagua_27 = format_Curso_dagua_27.readFeatures(json_Curso_dagua_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curso_dagua_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curso_dagua_27.addFeatures(features_Curso_dagua_27);
var lyr_Curso_dagua_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curso_dagua_27, 
                style: style_Curso_dagua_27,
                interactive: true,
                title: '<img src="styles/legend/Curso_dagua_27.png" /> Curso_dagua'
            });
var format_Benfeitorias_28 = new ol.format.GeoJSON();
var features_Benfeitorias_28 = format_Benfeitorias_28.readFeatures(json_Benfeitorias_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benfeitorias_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benfeitorias_28.addFeatures(features_Benfeitorias_28);
var lyr_Benfeitorias_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benfeitorias_28, 
                style: style_Benfeitorias_28,
                interactive: true,
                title: '<img src="styles/legend/Benfeitorias_28.png" /> Benfeitorias'
            });
var format_Barramentos_29 = new ol.format.GeoJSON();
var features_Barramentos_29 = format_Barramentos_29.readFeatures(json_Barramentos_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barramentos_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barramentos_29.addFeatures(features_Barramentos_29);
var lyr_Barramentos_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Barramentos_29, 
                style: style_Barramentos_29,
                interactive: true,
                title: '<img src="styles/legend/Barramentos_29.png" /> Barramentos'
            });
var format_Area_imovel_30 = new ol.format.GeoJSON();
var features_Area_imovel_30 = format_Area_imovel_30.readFeatures(json_Area_imovel_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_imovel_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_imovel_30.addFeatures(features_Area_imovel_30);
var lyr_Area_imovel_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_imovel_30, 
                style: style_Area_imovel_30,
                interactive: true,
                title: '<img src="styles/legend/Area_imovel_30.png" /> Area_imovel'
            });
var format_APPD_31 = new ol.format.GeoJSON();
var features_APPD_31 = format_APPD_31.readFeatures(json_APPD_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APPD_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPD_31.addFeatures(features_APPD_31);
var lyr_APPD_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APPD_31, 
                style: style_APPD_31,
                interactive: true,
                title: '<img src="styles/legend/APPD_31.png" /> APPD'
            });
var format_APP_32 = new ol.format.GeoJSON();
var features_APP_32 = format_APP_32.readFeatures(json_APP_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_32.addFeatures(features_APP_32);
var lyr_APP_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_32, 
                style: style_APP_32,
                interactive: true,
                title: '<img src="styles/legend/APP_32.png" /> APP'
            });
var format_Agricultura_33 = new ol.format.GeoJSON();
var features_Agricultura_33 = format_Agricultura_33.readFeatures(json_Agricultura_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agricultura_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agricultura_33.addFeatures(features_Agricultura_33);
var lyr_Agricultura_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agricultura_33, 
                style: style_Agricultura_33,
                interactive: true,
                title: '<img src="styles/legend/Agricultura_33.png" /> Agricultura'
            });
var format_AREA_IMOVEL_34 = new ol.format.GeoJSON();
var features_AREA_IMOVEL_34 = format_AREA_IMOVEL_34.readFeatures(json_AREA_IMOVEL_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_IMOVEL_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_IMOVEL_34.addFeatures(features_AREA_IMOVEL_34);
var lyr_AREA_IMOVEL_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA_IMOVEL_34, 
                style: style_AREA_IMOVEL_34,
                interactive: true,
                title: '<img src="styles/legend/AREA_IMOVEL_34.png" /> AREA_IMOVEL'
            });
var format_APP_35 = new ol.format.GeoJSON();
var features_APP_35 = format_APP_35.readFeatures(json_APP_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_35.addFeatures(features_APP_35);
var lyr_APP_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP_35, 
                style: style_APP_35,
                interactive: true,
                title: '<img src="styles/legend/APP_35.png" /> APP'
            });
var format_BENFEITORIAS_36 = new ol.format.GeoJSON();
var features_BENFEITORIAS_36 = format_BENFEITORIAS_36.readFeatures(json_BENFEITORIAS_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENFEITORIAS_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENFEITORIAS_36.addFeatures(features_BENFEITORIAS_36);
var lyr_BENFEITORIAS_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BENFEITORIAS_36, 
                style: style_BENFEITORIAS_36,
                interactive: true,
                title: '<img src="styles/legend/BENFEITORIAS_36.png" /> BENFEITORIAS'
            });
var format_LAVOURA_37 = new ol.format.GeoJSON();
var features_LAVOURA_37 = format_LAVOURA_37.readFeatures(json_LAVOURA_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAVOURA_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAVOURA_37.addFeatures(features_LAVOURA_37);
var lyr_LAVOURA_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAVOURA_37, 
                style: style_LAVOURA_37,
                interactive: true,
                title: '<img src="styles/legend/LAVOURA_37.png" /> LAVOURA'
            });
var format_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38 = new ol.format.GeoJSON();
var features_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38 = format_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38.readFeatures(json_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38.addFeatures(features_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38);
var lyr_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38, 
                style: style_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38,
                interactive: true,
                title: '<img src="styles/legend/TALISMA_BOA_ESPERANCAHIDROGRAFIA_38.png" /> TALISMA_BOA_ESPERANCA HIDROGRAFIA'
            });
var format_PERMUTA_39 = new ol.format.GeoJSON();
var features_PERMUTA_39 = format_PERMUTA_39.readFeatures(json_PERMUTA_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERMUTA_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMUTA_39.addFeatures(features_PERMUTA_39);
var lyr_PERMUTA_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERMUTA_39, 
                style: style_PERMUTA_39,
                interactive: true,
                title: '<img src="styles/legend/PERMUTA_39.png" /> PERMUTA'
            });
var format_REGENERACAO_40 = new ol.format.GeoJSON();
var features_REGENERACAO_40 = format_REGENERACAO_40.readFeatures(json_REGENERACAO_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGENERACAO_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGENERACAO_40.addFeatures(features_REGENERACAO_40);
var lyr_REGENERACAO_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REGENERACAO_40, 
                style: style_REGENERACAO_40,
                interactive: true,
                title: '<img src="styles/legend/REGENERACAO_40.png" /> REGENERACAO'
            });
var format_RL_41 = new ol.format.GeoJSON();
var features_RL_41 = format_RL_41.readFeatures(json_RL_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RL_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RL_41.addFeatures(features_RL_41);
var lyr_RL_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RL_41, 
                style: style_RL_41,
                interactive: true,
                title: '<img src="styles/legend/RL_41.png" /> RL'
            });
var format_RLS_42 = new ol.format.GeoJSON();
var features_RLS_42 = format_RLS_42.readFeatures(json_RLS_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RLS_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RLS_42.addFeatures(features_RLS_42);
var lyr_RLS_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RLS_42, 
                style: style_RLS_42,
                interactive: true,
                title: '<img src="styles/legend/RLS_42.png" /> RLS'
            });
var format_VNR_43 = new ol.format.GeoJSON();
var features_VNR_43 = format_VNR_43.readFeatures(json_VNR_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNR_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNR_43.addFeatures(features_VNR_43);
var lyr_VNR_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VNR_43, 
                style: style_VNR_43,
                interactive: true,
                title: '<img src="styles/legend/VNR_43.png" /> VNR'
            });
var format_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44 = new ol.format.GeoJSON();
var features_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44 = format_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44.readFeatures(json_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44.addFeatures(features_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44);
var lyr_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44, 
                style: style_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44,
                interactive: true,
                title: '<img src="styles/legend/TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44.png" /> TALISMA_BOA_ESPERANCA ESTRADAS_INTERNAS'
            });
var format_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45 = new ol.format.GeoJSON();
var features_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45 = format_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45.readFeatures(json_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45.addFeatures(features_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45);
var lyr_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45, 
                style: style_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45,
                interactive: true,
                title: '<img src="styles/legend/TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45.png" /> TALISMA_BOA_ESPERANCA SERVIDAO_ADMINISTRATIVA'
            });
var format_TALISMA_46 = new ol.format.GeoJSON();
var features_TALISMA_46 = format_TALISMA_46.readFeatures(json_TALISMA_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TALISMA_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TALISMA_46.addFeatures(features_TALISMA_46);
var lyr_TALISMA_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TALISMA_46, 
                style: style_TALISMA_46,
                interactive: true,
                title: '<img src="styles/legend/TALISMA_46.png" /> TALISMA'
            });
var group_Boa_Esperanca = new ol.layer.Group({
                                layers: [lyr_AREA_IMOVEL_34,lyr_APP_35,lyr_BENFEITORIAS_36,lyr_LAVOURA_37,lyr_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38,lyr_PERMUTA_39,lyr_REGENERACAO_40,lyr_RL_41,lyr_RLS_42,lyr_VNR_43,lyr_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44,lyr_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45,],
                                title: "Boa_Esperanca"});
var group_Barra_Mansa = new ol.layer.Group({
                                layers: [lyr_VNR_22,lyr_Servidao_administrativa_23,lyr_RL_24,lyr_Regeneracao_25,lyr_Estrada_interna_26,lyr_Curso_dagua_27,lyr_Benfeitorias_28,lyr_Barramentos_29,lyr_Area_imovel_30,lyr_APPD_31,lyr_APP_32,lyr_Agricultura_33,],
                                title: "Barra_Mansa"});
var group_Bom_Repouso = new ol.layer.Group({
                                layers: [lyr_VNR_11,lyr_RL_12,lyr_Regeneracao_13,lyr_RLS_14,lyr_Lavoura_15,lyr_Hidrografia_16,lyr_Estradas_internas_17,lyr_Benfeitorias_18,lyr_Area_imovel_19,lyr_APPD_20,lyr_APP_21,],
                                title: "Bom_Repouso"});
var group_Ona_Branca = new ol.layer.Group({
                                layers: [lyr_VNR_2,lyr_Talisma_Onca_Branca_3,lyr_RLS_4,lyr_regeneracao_5,lyr_HIDROGRAFIA_6,lyr_Estradas_internas_7,lyr_Area_imovel_8,lyr_APP_9,lyr_APD_10,],
                                title: "Onça_Branca"});
var group_Imagens = new ol.layer.Group({
                                layers: [lyr_NDVI_marco_2023_0,lyr_Cores_verdadeiras_marco_2023_1,],
                                title: "Imagens"});

lyr_NDVI_marco_2023_0.setVisible(true);lyr_Cores_verdadeiras_marco_2023_1.setVisible(true);lyr_VNR_2.setVisible(true);lyr_Talisma_Onca_Branca_3.setVisible(true);lyr_RLS_4.setVisible(true);lyr_regeneracao_5.setVisible(true);lyr_HIDROGRAFIA_6.setVisible(true);lyr_Estradas_internas_7.setVisible(true);lyr_Area_imovel_8.setVisible(true);lyr_APP_9.setVisible(true);lyr_APD_10.setVisible(true);lyr_VNR_11.setVisible(true);lyr_RL_12.setVisible(true);lyr_Regeneracao_13.setVisible(true);lyr_RLS_14.setVisible(true);lyr_Lavoura_15.setVisible(true);lyr_Hidrografia_16.setVisible(true);lyr_Estradas_internas_17.setVisible(true);lyr_Benfeitorias_18.setVisible(true);lyr_Area_imovel_19.setVisible(true);lyr_APPD_20.setVisible(true);lyr_APP_21.setVisible(true);lyr_VNR_22.setVisible(true);lyr_Servidao_administrativa_23.setVisible(true);lyr_RL_24.setVisible(true);lyr_Regeneracao_25.setVisible(true);lyr_Estrada_interna_26.setVisible(true);lyr_Curso_dagua_27.setVisible(true);lyr_Benfeitorias_28.setVisible(true);lyr_Barramentos_29.setVisible(true);lyr_Area_imovel_30.setVisible(true);lyr_APPD_31.setVisible(true);lyr_APP_32.setVisible(true);lyr_Agricultura_33.setVisible(true);lyr_AREA_IMOVEL_34.setVisible(true);lyr_APP_35.setVisible(true);lyr_BENFEITORIAS_36.setVisible(true);lyr_LAVOURA_37.setVisible(true);lyr_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38.setVisible(true);lyr_PERMUTA_39.setVisible(true);lyr_REGENERACAO_40.setVisible(true);lyr_RL_41.setVisible(true);lyr_RLS_42.setVisible(true);lyr_VNR_43.setVisible(true);lyr_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44.setVisible(true);lyr_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45.setVisible(true);lyr_TALISMA_46.setVisible(true);
var layersList = [group_Imagens,group_Ona_Branca,group_Bom_Repouso,group_Barra_Mansa,group_Boa_Esperanca,lyr_TALISMA_46];
lyr_VNR_2.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', '�rea (ha)': '�rea (ha)', });
lyr_Talisma_Onca_Branca_3.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_RLS_4.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', '�rea (ha)': '�rea (ha)', });
lyr_regeneracao_5.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_HIDROGRAFIA_6.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', '�rea (ha)': '�rea (ha)', });
lyr_Estradas_internas_7.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Area_imovel_8.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_APP_9.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', '�rea (ha)': '�rea (ha)', });
lyr_APD_10.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', '�rea (ha)': '�rea (ha)', });
lyr_VNR_11.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_RL_12.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', 'AREA_HA': 'AREA_HA', });
lyr_Regeneracao_13.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_RLS_14.set('fieldAliases', {'fid': 'fid', });
lyr_Lavoura_15.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_Hidrografia_16.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_Estradas_internas_17.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Benfeitorias_18.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Area_imovel_19.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_APPD_20.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_APP_21.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_VNR_22.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Servidao_administrativa_23.set('fieldAliases', {'fid': 'fid', 'recibo': 'recibo', 'area': 'area', 'tema': 'tema', });
lyr_RL_24.set('fieldAliases', {'fid': 'fid', 'recibo': 'recibo', 'area': 'area', 'tema': 'tema', });
lyr_Regeneracao_25.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Estrada_interna_26.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Curso_dagua_27.set('fieldAliases', {'fid': 'fid', 'recibo': 'recibo', 'area': 'area', 'tema': 'tema', });
lyr_Benfeitorias_28.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_Barramentos_29.set('fieldAliases', {'fid': 'fid', 'recibo': 'recibo', 'area': 'area', 'tema': 'tema', 'AREA_HA': 'AREA_HA', });
lyr_Area_imovel_30.set('fieldAliases', {'fid': 'fid', 'recibo': 'recibo', 'modfiscais': 'modfiscais', 'tema': 'tema', 'area': 'area', 'municipio': 'municipio', 'estado': 'estado', });
lyr_APPD_31.set('fieldAliases', {'fid': 'fid', 'recibo': 'recibo', 'area': 'area', 'tema': 'tema', });
lyr_APP_32.set('fieldAliases', {'fid': 'fid', 'recibo': 'recibo', 'area': 'area', 'tema': 'tema', });
lyr_Agricultura_33.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_AREA_IMOVEL_34.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_APP_35.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_BENFEITORIAS_36.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_LAVOURA_37.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_PERMUTA_39.set('fieldAliases', {'fid': 'fid', 'Talhao': 'Talhao', 'AREA_HA': 'AREA_HA', });
lyr_REGENERACAO_40.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_RL_41.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_RLS_42.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_VNR_43.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'AREA_HA': 'AREA_HA', });
lyr_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44.set('fieldAliases', {'fid': 'fid', 'AREA_HA': 'AREA_HA', });
lyr_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', 'AREA_HA': 'AREA_HA', });
lyr_TALISMA_46.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', 'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', });
lyr_VNR_2.set('fieldImages', {'fid': '', 'Classe': '', '�rea (ha)': '', });
lyr_Talisma_Onca_Branca_3.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RLS_4.set('fieldImages', {'fid': '', 'Classe': '', '�rea (ha)': '', });
lyr_regeneracao_5.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_HIDROGRAFIA_6.set('fieldImages', {'fid': '', 'Classe': '', '�rea (ha)': '', });
lyr_Estradas_internas_7.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_Area_imovel_8.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_APP_9.set('fieldImages', {'fid': '', 'Classe': '', '�rea (ha)': '', });
lyr_APD_10.set('fieldImages', {'fid': '', 'Classe': '', '�rea (ha)': '', });
lyr_VNR_11.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_RL_12.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', 'AREA_HA': '', });
lyr_Regeneracao_13.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_RLS_14.set('fieldImages', {'fid': '', });
lyr_Lavoura_15.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Hidrografia_16.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_Estradas_internas_17.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_Benfeitorias_18.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_Area_imovel_19.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_APPD_20.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_APP_21.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_VNR_22.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_Servidao_administrativa_23.set('fieldImages', {'fid': '', 'recibo': '', 'area': '', 'tema': '', });
lyr_RL_24.set('fieldImages', {'fid': '', 'recibo': '', 'area': '', 'tema': '', });
lyr_Regeneracao_25.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_Estrada_interna_26.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_Curso_dagua_27.set('fieldImages', {'fid': '', 'recibo': '', 'area': '', 'tema': '', });
lyr_Benfeitorias_28.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_Barramentos_29.set('fieldImages', {'fid': '', 'recibo': '', 'area': '', 'tema': '', 'AREA_HA': '', });
lyr_Area_imovel_30.set('fieldImages', {'fid': '', 'recibo': '', 'modfiscais': '', 'tema': '', 'area': '', 'municipio': '', 'estado': '', });
lyr_APPD_31.set('fieldImages', {'fid': '', 'recibo': '', 'area': '', 'tema': '', });
lyr_APP_32.set('fieldImages', {'fid': '', 'recibo': '', 'area': '', 'tema': '', });
lyr_Agricultura_33.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_AREA_IMOVEL_34.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_APP_35.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_BENFEITORIAS_36.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_LAVOURA_37.set('fieldImages', {'fid': 'TextEdit', 'Talhao': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', });
lyr_PERMUTA_39.set('fieldImages', {'fid': '', 'Talhao': '', 'AREA_HA': '', });
lyr_REGENERACAO_40.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_RL_41.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_RLS_42.set('fieldImages', {'fid': '', 'id': '', });
lyr_VNR_43.set('fieldImages', {'fid': '', 'id': '', 'AREA_HA': '', });
lyr_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44.set('fieldImages', {'fid': '', 'AREA_HA': '', });
lyr_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45.set('fieldImages', {'fid': '', 'COD_IMOVEL': '', 'ID': '', 'AREA_HA': '', });
lyr_TALISMA_46.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'descriptio': '', 'altitudeMo': '', 'parcela_co': '', 'rt': '', 'art': '', 'situacao_i': '', 'codigo_imo': '', 'data_submi': '', 'data_aprov': '', 'status': '', 'nome_area': '', 'registro_m': '', 'registro_d': '', 'municipio_': '', 'uf_id': '', });
lyr_VNR_2.set('fieldLabels', {});
lyr_Talisma_Onca_Branca_3.set('fieldLabels', {});
lyr_RLS_4.set('fieldLabels', {});
lyr_regeneracao_5.set('fieldLabels', {});
lyr_HIDROGRAFIA_6.set('fieldLabels', {});
lyr_Estradas_internas_7.set('fieldLabels', {});
lyr_Area_imovel_8.set('fieldLabels', {});
lyr_APP_9.set('fieldLabels', {});
lyr_APD_10.set('fieldLabels', {});
lyr_VNR_11.set('fieldLabels', {});
lyr_RL_12.set('fieldLabels', {});
lyr_Regeneracao_13.set('fieldLabels', {});
lyr_RLS_14.set('fieldLabels', {});
lyr_Lavoura_15.set('fieldLabels', {});
lyr_Hidrografia_16.set('fieldLabels', {});
lyr_Estradas_internas_17.set('fieldLabels', {});
lyr_Benfeitorias_18.set('fieldLabels', {});
lyr_Area_imovel_19.set('fieldLabels', {});
lyr_APPD_20.set('fieldLabels', {});
lyr_APP_21.set('fieldLabels', {});
lyr_VNR_22.set('fieldLabels', {});
lyr_Servidao_administrativa_23.set('fieldLabels', {});
lyr_RL_24.set('fieldLabels', {});
lyr_Regeneracao_25.set('fieldLabels', {});
lyr_Estrada_interna_26.set('fieldLabels', {});
lyr_Curso_dagua_27.set('fieldLabels', {});
lyr_Benfeitorias_28.set('fieldLabels', {});
lyr_Barramentos_29.set('fieldLabels', {});
lyr_Area_imovel_30.set('fieldLabels', {});
lyr_APPD_31.set('fieldLabels', {});
lyr_APP_32.set('fieldLabels', {});
lyr_Agricultura_33.set('fieldLabels', {});
lyr_AREA_IMOVEL_34.set('fieldLabels', {});
lyr_APP_35.set('fieldLabels', {});
lyr_BENFEITORIAS_36.set('fieldLabels', {});
lyr_LAVOURA_37.set('fieldLabels', {});
lyr_TALISMA_BOA_ESPERANCAHIDROGRAFIA_38.set('fieldLabels', {});
lyr_PERMUTA_39.set('fieldLabels', {});
lyr_REGENERACAO_40.set('fieldLabels', {});
lyr_RL_41.set('fieldLabels', {});
lyr_RLS_42.set('fieldLabels', {});
lyr_VNR_43.set('fieldLabels', {});
lyr_TALISMA_BOA_ESPERANCAESTRADAS_INTERNAS_44.set('fieldLabels', {});
lyr_TALISMA_BOA_ESPERANCASERVIDAO_ADMINISTRATIVA_45.set('fieldLabels', {});
lyr_TALISMA_46.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descriptio': 'no label', 'altitudeMo': 'no label', 'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'municipio_': 'no label', 'uf_id': 'no label', });
lyr_TALISMA_46.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});