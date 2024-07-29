<script setup lang="ts">
import { $t, definePreset, usePreset, updatePreset } from "@primevue/themes";
import { useDark } from "@vueuse/core";
import { useToggle } from "@vueuse/shared";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const changePrimaryColor = (base: string) => {
    const MyPreset = updatePreset({
        semantic: {
            primary: {
                50: `{${base}.50}`,
                100: `{${base}.100}`,
                200: `{${base}.200}`,
                300: `{${base}.300}`,
                400: `{${base}.400}`,
                500: `{${base}.500}`,
                600: `{${base}.600}`,
                700: `{${base}.700}`,
                800: `{${base}.800}`,
                900: `{${base}.900}`,
                950: `{${base}.950}`,
            },
        },
    });
    console.log("xxx Updated preset", MyPreset);
};

const colorPopover = ref();
const toggleColorPopover = (event: any) => {
    colorPopover.value.toggle(event);
};

function setLight() {
    if (isDark.value) toggleDark();
}

function setDark() {
    if (!isDark.value) toggleDark();
}

function setDim() {
    if (!isDark.value) toggleDark();
}

function setDarkOrLightMode() {
    toggleDark();
    if (isDark.value) setDark();
    else setLight();
}
</script>

<template>
    <Toolbar style="border: none">
        <template #end>
            <div class="px-40">
                <Button icon="pi pi-palette" @click="toggleColorPopover" />
                <Popover ref="colorPopover" append-to="body">
                    <h6>Primary Color</h6>
                    <div class="flex">
                        <div
                            style="
                                width: 2rem;
                                height: 2rem;
                                border-radius: 6px;
                            "
                            class="bg-green-500 mr-3 cursor-pointer"
                            @click="changePrimaryColor('green')"
                        />
                        <div
                            style="
                                width: 2rem;
                                height: 2rem;
                                border-radius: 6px;
                            "
                            class="bg-blue-500 mr-3 cursor-pointer"
                            @click="changePrimaryColor('blue')"
                        />
                        <div
                            style="
                                width: 2rem;
                                height: 2rem;
                                border-radius: 6px;
                            "
                            class="bg-teal-500 mr-3 cursor-pointer"
                            @click="changePrimaryColor('teal')"
                        />
                        <div
                            style="
                                width: 2rem;
                                height: 2rem;
                                border-radius: 6px;
                            "
                            class="bg-purple-500 mr-3 cursor-pointer"
                            @click="changePrimaryColor('purple')"
                        />
                    </div>
                    <div class="flex mt-2">
                        <div
                            style="
                                width: 2rem;
                                height: 2rem;
                                border-radius: 6px;
                            "
                            class="bg-cyan-500 mr-3 cursor-pointer"
                            @click="changePrimaryColor('cyan')"
                        />
                        <div
                            style="
                                width: 2rem;
                                height: 2rem;
                                border-radius: 6px;
                            "
                            class="bg-indigo-500 mr-3 cursor-pointer"
                            @click="changePrimaryColor('indigo')"
                        />
                        <div
                            style="
                                width: 2rem;
                                height: 2rem;
                                border-radius: 6px;
                            "
                            class="bg-pink-500 mr-3 cursor-pointer"
                            @click="changePrimaryColor('pink')"
                        />
                        <div
                            style="
                                width: 2rem;
                                height: 2rem;
                                border-radius: 6px;
                            "
                            class="bg-amber-500 mr-3 cursor-pointer"
                            @click="changePrimaryColor('amber')"
                        />
                        <div
                            style="
                                width: 2rem;
                                height: 2rem;
                                border-radius: 6px;
                            "
                            class="bg-red-500 mr-3 cursor-pointer"
                            @click="changePrimaryColor('red')"
                        />
                    </div>
                </Popover>
                <Button
                    class="p-link layout-topbar-button mx-2"
                    @click="setDarkOrLightMode()"
                >
                    <i
                        inline-block
                        align-middle
                        i="dark:carbon-moon carbon-sun"
                    />
                </Button>
            </div>
        </template>
    </Toolbar>

    <div class="card py-4">
        <div class="flex justify-between">
            <div><span class="text-primary">Hello Primary</span></div>
            <div><span class="text-secondary">Hello Secondary</span></div>
            <div><span class="text-blue">Hello Blue</span></div>
            <div><span class="text-red">Hello Red</span></div>
        </div>
        <div class="py-4 justify-between flex">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warn" severity="warn" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
            <Button label="Contrast" severity="contrast" />
        </div>
        <div>
            <IconField>
                <InputIcon class="pi pi-search" />
                <InputText v-model="value1" placeholder="Search" />
            </IconField>
        </div>
        <Divider />
        <div>
            <Card>
                <template #title>Simple Card</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores
                        earum nam nobis, culpa ratione quam perferendis esse,
                        cupiditate neque quas!
                    </p>
                </template>
            </Card>
            <label> <input type="checkbox" checked /> Browser default </label>
            <label>
                <input type="checkbox" class="accent-pink-500" checked />
                Customized
            </label>
        </div>
    </div>
</template>
