import { Module } from 'vuex';
import { VersionModule } from '../../types';

export const version: Module<VersionModule, VersionModule> = {
  state: {
    version: process.env.PACKAGE_VERSION || '0.0.0'
  },
  getters: {
    version: state => state.version
  }
};
