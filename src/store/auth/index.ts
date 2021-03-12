import { Module } from 'vuex';
import { AuthModule } from '../../types';
import { useFirebase } from '../../firebase';

export const auth: Module<AuthModule, AuthModule> = {
  namespaced: true,
  state: {
    editor: false,
    admin: false
  },
  getters: {
    isEditor: state => state.editor || state.admin,
    isAdmin: state => state.admin
  },
  mutations: {
    editor: (state, payload) => state.editor = payload,
    admin: (state, payload) => state.admin = payload,
  },
  actions: {
    initAuth: async context => {
      const firebase = useFirebase();
      const userId = firebase.auth().currentUser?.uid || undefined;
      const rolesRef = firebase.database().ref('roles');
      const roleEditorRef = rolesRef.child('editor');
      const roleAdminRef = rolesRef.child('admin');

      const userIsEditor = userId ? (await roleEditorRef.child(userId).get()).val() : false;
      const userIsAdmin = userId ? (await roleAdminRef.child(userId).get()).val() : false;

      context.commit('editor', userIsEditor);
      context.commit('admin', userIsAdmin);
    }
  }
};
