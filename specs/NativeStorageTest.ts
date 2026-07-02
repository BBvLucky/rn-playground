import type { TurboModule } from 'react-native'
import { TurboModuleRegistry } from 'react-native'

export interface Spec extends TurboModule {
    set: (item: string, key: string) => void;
    get: (key: string) => string | null;
    remove: (key: string) => void;
    clear: () => void;
}


export default TurboModuleRegistry.getEnforcing<Spec>('NativeStorageTest');