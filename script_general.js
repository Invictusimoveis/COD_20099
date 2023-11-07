(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"gap":10,"id":"rootPlayer","backgroundColor":["#FFFFFF"],"minHeight":0,"data":{"defaultLocale":"pt","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false},"name":"Player736","history":{}},"minWidth":0,"backgroundColorRatios":[0],"scrollBarColor":"#000000","propagateClick":false,"scrollBarMargin":2,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","watermark":false,"children":["this.MainViewer"],"width":"100%","hash": "5c2b2fb9ce111ba0b159866a1b46f10afc7394700f8c486f9d432eb1b142164e", "definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_camera","initialSequence":"this.sequence_A0A2E34C_AACB_EBCB_41DB_D148124075AD","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2","label":trans('panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2.label'),"vfov":180,"data":{"label":"3"},"thumbnailUrl":"media/panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_t.jpg","frames":[{"thumbnailUrl":"media/panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_t.jpg","cube":{"levels":[{"height":4096,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":8,"colCount":48,"url":"media/panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_0/{face}/0/{row}_{column}.jpg","width":24576},{"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4,"colCount":24,"url":"media/panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_0/{face}/1/{row}_{column}.jpg","width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":12,"url":"media/panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":6,"url":"media/panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1,"colCount":6,"url":"media/panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_0/{face}/vr/0.jpg","width":9216},{"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1,"colCount":6,"url":"media/panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","overlays":["this.overlay_A5A17246_AACC_253F_41D4_F7EE118D53A9"],"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9","yaw":68.17,"data":{"overlayID":"overlay_A5A17246_AACC_253F_41D4_F7EE118D53A9"},"distance":19.36,"select":"this.overlay_A5A17246_AACC_253F_41D4_F7EE118D53A9.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_camera","initialSequence":"this.sequence_A0A2C34C_AACB_EBCB_4199_A65E8E945FE0","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"mainPlayList","class":"PlayList","items":["this.PanoramaPlayListItem_BA13DF30_AAC4_5B6C_41D0_6776038DEC04","this.PanoramaPlayListItem_BA133F30_AAC4_5B6C_41E4_C45FF5AFBCA0","this.PanoramaPlayListItem_BA13BF30_AAC4_5B6C_41B9_27F1D52D854C","this.PanoramaPlayListItem_BA136F30_AAC4_5B6C_41A3_AFB3FDA58C8C","this.PanoramaPlayListItem_BA134F30_AAC4_5B6C_41A9_1CD23A3B78BA"]},{"id":"panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F","label":trans('panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F.label'),"vfov":180,"data":{"label":"2"},"thumbnailUrl":"media/panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_t.jpg","frames":[{"thumbnailUrl":"media/panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_t.jpg","cube":{"levels":[{"height":4096,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":8,"colCount":48,"url":"media/panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_0/{face}/0/{row}_{column}.jpg","width":24576},{"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4,"colCount":24,"url":"media/panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_0/{face}/1/{row}_{column}.jpg","width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":12,"url":"media/panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":6,"url":"media/panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1,"colCount":6,"url":"media/panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_0/{face}/vr/0.jpg","width":9216},{"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1,"colCount":6,"url":"media/panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","overlays":["this.overlay_BA552CF8_AACB_FED1_41D3_2F3C15B49129"],"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9","yaw":101.88,"data":{"overlayID":"overlay_BA552CF8_AACB_FED1_41D3_2F3C15B49129"},"distance":32.31,"select":"this.overlay_BA552CF8_AACB_FED1_41D3_2F3C15B49129.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_camera","initialSequence":"this.sequence_A0BEC34B_AACB_EBCD_41C2_7D604CB5DC5E","class":"PanoramaCamera","enterPointingToHorizon":true},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_camera","initialSequence":"this.sequence_A0A2A34C_AACB_EBCB_41DF_A3AFE62E6586","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"arrowKeysAction":"translate","displayPlaybackBar":true,"touchControlMode":"drag_rotation"},{"id":"panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E","label":trans('panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E.label'),"vfov":180,"data":{"label":"1"},"thumbnailUrl":"media/panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_t.jpg","frames":[{"thumbnailUrl":"media/panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_t.jpg","cube":{"levels":[{"height":4096,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":8,"colCount":48,"url":"media/panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_0/{face}/0/{row}_{column}.jpg","width":24576},{"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4,"colCount":24,"url":"media/panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_0/{face}/1/{row}_{column}.jpg","width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":12,"url":"media/panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":6,"url":"media/panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1,"colCount":6,"url":"media/panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_0/{face}/vr/0.jpg","width":9216},{"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1,"colCount":6,"url":"media/panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","overlays":["this.overlay_BA4BFD70_AAC4_5FD1_41E3_5E59444344C0"],"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9","yaw":-178.85,"data":{"overlayID":"overlay_BA4BFD70_AAC4_5FD1_41E3_5E59444344C0"},"distance":24.55,"select":"this.overlay_BA4BFD70_AAC4_5FD1_41E3_5E59444344C0.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360},{"id":"panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B","label":trans('panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B.label'),"vfov":180,"data":{"label":"5"},"thumbnailUrl":"media/panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_t.jpg","frames":[{"thumbnailUrl":"media/panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_t.jpg","cube":{"levels":[{"height":4096,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":8,"colCount":48,"url":"media/panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_0/{face}/0/{row}_{column}.jpg","width":24576},{"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4,"colCount":24,"url":"media/panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_0/{face}/1/{row}_{column}.jpg","width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":12,"url":"media/panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":6,"url":"media/panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1,"colCount":6,"url":"media/panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_0/{face}/vr/0.jpg","width":9216},{"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1,"colCount":6,"url":"media/panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","overlays":["this.overlay_A798925E_AACD_E5C6_41DF_4A00AC2AD757"],"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9","yaw":-13.02,"data":{"overlayID":"overlay_A798925E_AACD_E5C6_41DF_4A00AC2AD757"},"distance":100,"select":"this.overlay_A798925E_AACD_E5C6_41DF_4A00AC2AD757.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_camera","initialSequence":"this.sequence_A0A3334C_AACB_EBCB_41C3_4BDDDC2BB722","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9","label":trans('panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9.label'),"vfov":180,"data":{"label":"4"},"thumbnailUrl":"media/panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_t.jpg","frames":[{"thumbnailUrl":"media/panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_t.jpg","cube":{"levels":[{"height":4096,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":8,"colCount":48,"url":"media/panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_0/{face}/0/{row}_{column}.jpg","width":24576},{"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4,"colCount":24,"url":"media/panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_0/{face}/1/{row}_{column}.jpg","width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":12,"url":"media/panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":6,"url":"media/panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1,"colCount":6,"url":"media/panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_0/{face}/vr/0.jpg","width":9216},{"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1,"colCount":6,"url":"media/panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","overlays":["this.overlay_A5635317_AACC_EB47_41BB_F11C27A4BFF2","this.overlay_A4BF9AD9_AACC_DAC8_41DA_F43CEEC7AF52","this.overlay_A4AE0D1E_AACC_DF48_41E3_A1B5B50C55BA","this.overlay_BA3F6A31_AACC_2557_41D4_D54BB7330419"],"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F","yaw":-46.91,"data":{"overlayID":"overlay_A4BF9AD9_AACC_DAC8_41DA_F43CEEC7AF52"},"distance":100,"select":"this.overlay_A4BF9AD9_AACC_DAC8_41DA_F43CEEC7AF52.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","panorama":"this.panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B","yaw":155.54,"data":{"overlayID":"overlay_BA3F6A31_AACC_2557_41D4_D54BB7330419"},"distance":49.11,"select":"this.overlay_BA3F6A31_AACC_2557_41D4_D54BB7330419.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","panorama":"this.panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E","yaw":-39.9,"data":{"overlayID":"overlay_A5635317_AACC_EB47_41BB_F11C27A4BFF2"},"distance":100,"select":"this.overlay_A5635317_AACC_EB47_41BB_F11C27A4BFF2.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","panorama":"this.panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2","yaw":-53.37,"data":{"overlayID":"overlay_A4AE0D1E_AACC_DF48_41E3_A1B5B50C55BA"},"distance":56.72,"select":"this.overlay_A4AE0D1E_AACC_DF48_41E3_A1B5B50C55BA.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360},{"id":"MainViewer","toolTipFontFamily":"Arial","minHeight":50,"progressBottom":10,"playbackBarProgressBorderColor":"#000000","minWidth":100,"surfaceReticleColor":"#FFFFFF","data":{"name":"Main Viewer"},"progressHeight":2,"toolTipBorderColor":"#767676","playbackBarBorderRadius":0,"playbackBarHeadBorderRadius":0,"progressBorderSize":0,"progressBarBorderRadius":2,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderSize":0,"progressBarBorderSize":0,"toolTipFontColor":"#606060","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"subtitlesTop":0,"vrPointerColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesGap":0,"surfaceReticleSelectionColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","progressBorderRadius":2,"subtitlesFontSize":"3vmin","playbackBarHeadShadow":true,"toolTipPaddingLeft":6,"subtitlesBackgroundOpacity":0.2,"subtitlesBottom":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"width":"100%","subtitlesTextShadowOpacity":1,"playbackBarBottom":5,"progressLeft":"33%","subtitlesBorderColor":"#FFFFFF","toolTipPaddingRight":6,"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingTop":4,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeight":10,"playbackBarHeadWidth":6,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBorderSize":0,"propagateClick":false,"playbackBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"playbackBarRight":0,"toolTipPaddingBottom":4,"progressBackgroundColorRatios":[0],"height":"100%","progressRight":"33%","progressOpacity":0.7,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"vrPointerSelectionTime":2000,"class":"ViewerArea","playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","subtitlesFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","playbackBarBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"]},{"id":"sequence_A0A2E34C_AACB_EBCB_41DB_D148124075AD","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"maps":[],"id":"overlay_A5A17246_AACC_253F_41D4_F7EE118D53A9","areas":["this.HotspotPanoramaOverlayArea_A57AB2AA_AACC_2577_41AD_0A38CB0A6187"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":10.5,"pitch":-5.01,"yaw":68.17,"data":{"label":"18"},"hfov":10.5,"image":"this.res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F","scaleMode":"fit_inside"}],"data":{"label":"18","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"sequence_A0A2C34C_AACB_EBCB_4199_A65E8E945FE0","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"PanoramaPlayListItem_BA13DF30_AAC4_5B6C_41D0_6776038DEC04","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B_camera","media":"this.panorama_A61155AC_AAC4_6F4B_41D2_AED4038D2D1B","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_BA133F30_AAC4_5B6C_41E4_C45FF5AFBCA0","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9_camera","media":"this.panorama_A08BE051_AAC4_25DD_419F_A714D8ACF0D9","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"id":"PanoramaPlayListItem_BA13BF30_AAC4_5B6C_41B9_27F1D52D854C","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2_camera","media":"this.panorama_A08668FA_AAC4_26CE_41DA_79A9E7F453D2","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"id":"PanoramaPlayListItem_BA136F30_AAC4_5B6C_41A3_AFB3FDA58C8C","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F_camera","media":"this.panorama_A0861208_AAC4_254B_41CA_7423CAAB3B3F","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"id":"PanoramaPlayListItem_BA134F30_AAC4_5B6C_41A9_1CD23A3B78BA","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E_camera","media":"this.panorama_A0872AC1_AAC4_253D_41C8_ACB7EA68F09E","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"},{"maps":[],"id":"overlay_BA552CF8_AACB_FED1_41D3_2F3C15B49129","areas":["this.HotspotPanoramaOverlayArea_A56B6D5C_AACB_FFD1_41A1_E05AF2792882"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":10.5,"pitch":-3,"yaw":101.88,"data":{"label":"18"},"hfov":10.5,"image":"this.res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F","scaleMode":"fit_inside"}],"data":{"label":"18","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"sequence_A0BEC34B_AACB_EBCD_41C2_7D604CB5DC5E","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"sequence_A0A2A34C_AACB_EBCB_41DF_A3AFE62E6586","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"maps":[],"id":"overlay_BA4BFD70_AAC4_5FD1_41E3_5E59444344C0","areas":["this.HotspotPanoramaOverlayArea_A5345DDB_AAC4_5ED0_41D9_88AE07986498"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":10.5,"pitch":-3.95,"yaw":-178.85,"data":{"label":"18"},"hfov":10.5,"image":"this.res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F","scaleMode":"fit_inside"}],"data":{"label":"18","hasPanoramaAction":true},"enabledInCardboard":true},{"maps":[],"id":"overlay_A798925E_AACD_E5C6_41DF_4A00AC2AD757","areas":["this.HotspotPanoramaOverlayArea_A79A72C6_AACD_EAC6_41E1_6A9BFC381F56"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":6.52,"pitch":-0.02,"yaw":-13.02,"data":{"label":"18"},"hfov":6.44,"image":"this.res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F","scaleMode":"fit_inside"}],"data":{"label":"18","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"sequence_A0A3334C_AACB_EBCB_41C3_4BDDDC2BB722","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"maps":[],"id":"overlay_A5635317_AACC_EB47_41BB_F11C27A4BFF2","areas":["this.HotspotPanoramaOverlayArea_A46DA372_AACC_EBD9_41E2_5A92481E4E7E"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":8.09,"pitch":-0.9,"yaw":-39.9,"data":{"label":"18"},"hfov":4.51,"image":"this.res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F","scaleMode":"fit_inside"}],"data":{"label":"18","hasPanoramaAction":true},"enabledInCardboard":true},{"maps":[],"id":"overlay_A4BF9AD9_AACC_DAC8_41DA_F43CEEC7AF52","areas":["this.HotspotPanoramaOverlayArea_A4BEFADA_AACC_DAC8_41D0_0DD3AC0B25FF"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":9.13,"pitch":-0.89,"yaw":-46.91,"data":{"label":"18"},"hfov":4.87,"image":"this.res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F","scaleMode":"fit_inside"}],"data":{"label":"18","hasPanoramaAction":true},"enabledInCardboard":true},{"maps":[],"id":"overlay_A4AE0D1E_AACC_DF48_41E3_A1B5B50C55BA","areas":["this.HotspotPanoramaOverlayArea_A4AEFD1E_AACC_DF48_41E1_2B4FAB1DA7A1"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":8.61,"pitch":-1.71,"yaw":-53.37,"data":{"label":"18"},"hfov":5.13,"image":"this.res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F","scaleMode":"fit_inside"}],"data":{"label":"18","hasPanoramaAction":true},"enabledInCardboard":true},{"maps":[],"id":"overlay_BA3F6A31_AACC_2557_41D4_D54BB7330419","areas":["this.HotspotPanoramaOverlayArea_BA3D0A34_AACC_255D_41D2_3F86EC4AA800"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":8.89,"pitch":-1.97,"yaw":155.54,"data":{"label":"18"},"hfov":6.65,"image":"this.res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F","scaleMode":"fit_inside"}],"data":{"label":"18","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"HotspotPanoramaOverlayArea_A57AB2AA_AACC_2577_41AD_0A38CB0A6187","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BA133F30_AAC4_5B6C_41E4_C45FF5AFBCA0, 60.92307692307692, 4.0983899821109135, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"levels":[{"height":495,"class":"ImageResourceLevel","url":"media/res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F_0.png","width":495}],"id":"res_B82ACAD9_AAC4_5ADF_41D5_D6FF412CD76F","class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_A56B6D5C_AACB_FFD1_41A1_E05AF2792882","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BA133F30_AAC4_5B6C_41E4_C45FF5AFBCA0, 84.18461538461538, -0.3352415026833623, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"HotspotPanoramaOverlayArea_A5345DDB_AAC4_5ED0_41D9_88AE07986498","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BA133F30_AAC4_5B6C_41E4_C45FF5AFBCA0, 165.6, -0.8894454382826467, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"HotspotPanoramaOverlayArea_A79A72C6_AACD_EAC6_41E1_6A9BFC381F56","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BA133F30_AAC4_5B6C_41E4_C45FF5AFBCA0, -15.507692307692308, 1.8815742397137754, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"toolTip":trans('HotspotPanoramaOverlayArea_A46DA372_AACC_EBD9_41E2_5A92481E4E7E.toolTip'),"id":"HotspotPanoramaOverlayArea_A46DA372_AACC_EBD9_41E2_5A92481E4E7E","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BA134F30_AAC4_5B6C_41A9_1CD23A3B78BA, 13.292307692307693, -0.8894454382826467, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 4)"},{"id":"HotspotPanoramaOverlayArea_A4BEFADA_AACC_DAC8_41D0_0DD3AC0B25FF","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BA136F30_AAC4_5B6C_41A3_AFB3FDA58C8C, -46.52307692307692, 0.7731663685152066, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 3)"},{"id":"HotspotPanoramaOverlayArea_A4AEFD1E_AACC_DF48_41E1_2B4FAB1DA7A1","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BA13BF30_AAC4_5B6C_41B9_27F1D52D854C, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2)"},{"id":"HotspotPanoramaOverlayArea_BA3D0A34_AACC_255D_41D2_3F86EC4AA800","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_BA13DF30_AAC4_5B6C_41D0_6776038DEC04, -170.58461538461538, -0.3352415026833623, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)"}],"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","class":"Player","layout":"absolute","scripts":{"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"isPanorama":TDV.Tour.Script.isPanorama,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getKey":TDV.Tour.Script.getKey,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setValue":TDV.Tour.Script.setValue,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"mixObject":TDV.Tour.Script.mixObject,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"init":TDV.Tour.Script.init,"shareSocial":TDV.Tour.Script.shareSocial,"translate":TDV.Tour.Script.translate,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeJS":TDV.Tour.Script.executeJS,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizShowScore":TDV.Tour.Script.quizShowScore,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"resumePlayers":TDV.Tour.Script.resumePlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"setLocale":TDV.Tour.Script.setLocale,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizStart":TDV.Tour.Script.quizStart,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"historyGoForward":TDV.Tour.Script.historyGoForward,"clone":TDV.Tour.Script.clone,"downloadFile":TDV.Tour.Script.downloadFile,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"existsKey":TDV.Tour.Script.existsKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"registerKey":TDV.Tour.Script.registerKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMainViewer":TDV.Tour.Script.getMainViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"createTween":TDV.Tour.Script.createTween,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"openLink":TDV.Tour.Script.openLink,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPixels":TDV.Tour.Script.getPixels,"textToSpeech":TDV.Tour.Script.textToSpeech,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.17.js.map
})();
//Generated with v2023.1.17, Tue Nov 7 2023