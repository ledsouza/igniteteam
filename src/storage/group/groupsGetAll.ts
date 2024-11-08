import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
    try {
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
        const group: string[] = storage ? JSON.parse(storage) : [];
        return group;
    } catch (error) {
        throw error;
    }
}
