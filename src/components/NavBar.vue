<template>
  <div class="nav-bar px-2 lg:px-16">
    <!-- Left side menu -->
    <section v-if="isLargeScreen">
      <div class="flex items-center">
        <NavButton
          to="/"
          class="pr-4"
        >
          <img
            :src="favicon"
            class="max-h-8"
          />
        </NavButton>
        <NavButton
          to="/"
          label="Home"
        />
        <NavButton
          to="/create"
          label="New Template"
        />
      </div>
    </section>

    <!-- Mobile menu -->
    <section
      v-else
      class="flex align-center"
    >
      <Button>
        <img
          id="nav-menu__activator"
          :src="menu"
        />
      </Button>
      <Menu
        activator="nav-menu__activator"
        class="nav-menu"
      >
        <template v-slot="{ closeMenu }">
          <div class="nav-menu-content">
            <!-- Logo -->
            <RouterLink to="/">
              <Button @click="closeMenu">
                Home
              </Button>
            </RouterLink>
            <!-- Create -->
            <RouterLink
              to="/create"
              @click="closeMenu"
            >
              <Button @click="closeMenu">
                Create
              </Button>
            </RouterLink>
            <!-- Info -->
            <RouterLink to="/demo">
              <Button @click="closeMenu">
                How does it work?
              </Button>
            </RouterLink>
          </div>
        </template>
      </Menu>
    </section>

    <!-- Right side menu -->
    <!-- NOTE: hidden while in beta -->
    <section>
      <NavButton
        to="/demo"
        label="What is Linkmail?"
      />
      <NavButton
        v-if="false"
        to="/donate"
        label="❤️ Donate"
      />
    </section>
  </div>
</template>

<script
  setup
  lang="ts"
>
import favicon from '../assets/favicon.svg';
import NavButton from './NavButton.vue';
import Button from './Button.vue'
import Menu from './Menu.vue';
import menu from '../assets/icons/menu.svg'

const isLargeScreen = window.matchMedia('(min-width: 600px)').matches;

</script>

<style scoped>
.nav-bar {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  width: 100vw;
  background-color: #e8e4d4;
  position: sticky;
  top: 0;
}

.nav-menu {
  margin-left: 46px;
  margin-top: 8px;
}

.nav-menu-content {
  display: flex;
  flex-direction: column;
}

#nav-menu__activator {
  padding: 0.5rem;
  border-radius: 8px;
}

#nav-menu__activator:hover {
  background-color: #cecbbeb4;
}
</style>
