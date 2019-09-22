import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cardName:'',
        selectedFactions: [],
        selectedCardSet: [],
        selectedCardTypes: [],
        selectedCardRarities: [],
        queryData: [],
    },
    mutations: {
        setCardName (state, cardName) {
            state.cardName = cardName;
        },
        updateFactions (state, selectedFactions) {
            state.selectedFactions = selectedFactions;
        },
        setSelectedCardSet (state, selectedCardSet) {
            state.selectedCardSet = selectedCardSet;
        },
        setSelectedCardTypes (state, selectedCardTypes) {
            state.selectedCardTypes = selectedCardTypes;
        },
        setSelectedCardRarities (state, selectedCardRarities) {
            state.selectedCardRarities = selectedCardRarities;
        }, 
    },
    getters: {
        returnFactions: state => {
            return state.selectedFactions;
        }
    },
    actions: {
        setFactions({commit}, factions) {
            commit('updateFactions', factions);
        }
    }
});