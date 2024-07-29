<template>
    <div>
        <Toolbar style="border: none" id="toolbar">
            <Button
                id="colorButton"
                class="mx-2"
                type="button"
                rounded
                icon="pi pi-palette"
            />
        </Toolbar>
        <slot />
    </div>
</template>
