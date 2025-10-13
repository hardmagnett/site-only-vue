<template>
  <nav class="main-menu-new">
    <ul
      id="selector-for-smartmenus"
      class="sm sm-simple"
      ref="ulNodeForSmartMenus"
    >
      <!--Так было в mv-framework. Пока-что оставить.-->
      <!--<li class="first active"><a href="/" class="">Главная</a></li>-->

      <li :class="{'active': route.name === 'main'}">
        <router-link :to="{name: 'main'}" @click="clickOnLinkHandler">
          Главная
        </router-link>
      </li>

      <li :class="{'active': route.name === 'projects'}">
        <router-link :to="{name: 'projects'}" @click="clickOnLinkHandler">
          Примеры работ
        </router-link>
      </li>

      <li :class="{'active': ['service-engineering', 'service-assembly'].includes(String(route.name))}">
        <a class=" has-submenu">Услуги</a>
        <ul>
          <li :class="{'active': route.name === 'service-engineering'}">
            <router-link :to="{name: 'service-engineering'}" @click="clickOnLinkHandler">
              Проектирование электрощитов
            </router-link>
          </li>

          <li :class="{'active': route.name === 'service-assembly'}">
            <router-link :to="{name: 'service-assembly'}" @click="clickOnLinkHandler">
              Сборка электрощитов
            </router-link>
          </li>

        </ul>
      </li>

      <li :class="{'active': route.name === 'about'}">
        <router-link :to="{name: 'about'}" @click="clickOnLinkHandler">
          Обо мне
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import $ from "jquery";
import 'smartmenus'
import { useRoute } from 'vue-router';
const route = useRoute();
const ulNodeForSmartMenus = useTemplateRef<HTMLUListElement>('ulNodeForSmartMenus')
const emit = defineEmits<{
  menuItemClick: [];
}>()

const clickOnLinkHandler = ()=>{
  emit('menuItemClick')
}

//
/**
 * В onBeforeMount эта jQuery-херь не срабатывала.
 *
 * Подходящего события для обработки клика по ссылке у SmartMenus нет. (подробности в моем гисте).
 * Поэтому раскопировал обработчик по всему темплейту.
 */
onMounted(()=>{
  // @ts-expect-error: Какой нах TS при использовании Vue и jQuery вместе.
  $(ulNodeForSmartMenus.value).smartmenus({
    // Поклацал эти 3 режима, и ничего лучше, чем accordion-default (как у Ваньки) не нашел.
    // Это даже удобная тактика на сенсоре на большом экране.
    collapsibleBehavior: 'accordion', // Только для тач

    hideTimeout: 1, // Только для десктопа
    showTimeout: 1, // Только для десктопа

    // Брекпоинт (768) захардкожен в
    // media/libs/smartmenus-1.2.1/css/sm-simple/sm-simple.css
    // Хорошо хоть 1 раз захардкожен.
  });
})

</script>

<style>
/**
 * Здесь - и мои стили, и оверрайдинг для библиотечной темы simple.
 *
 * ХЗ почему, но со scoped не работали:
 * - стилизация стрелок-переворачивалок (анимация и иконка)
 * - ещё что-то
 */
/**/


.main-menu-new {
  --a-level-1-height: 48px;
  --a-level-2-height: 40px;
  > ul {
    background-color: var(--clr-bg-header-first);
    border: none;
    box-shadow: none;
    > li {
      border-bottom: 1px solid var(--clr-bg-header-second);
      /*level 1*/

      &.active {
        > a {
          color: var(--clr-main) !important;
        }
      }

      > a {
        text-transform: uppercase;


        display: block;
        padding: 0 var(--gap);
        color: var(--clr-txt-navigation);
        font-family: var(--body-font-family);

        font-weight: 600;
        font-size: 16px;

        line-height: var(--a-level-1-height);
        height: var(--a-level-1-height);
        text-decoration: none;
        cursor: pointer;
        transition: all var(--time-short);
        &:hover, &:focus {
          color: var(--clr-txt-navigation);
          padding: 0 var(--gap);
          font-family: var(--body-font-family);
          font-size: 16px;
          font-weight: 600;
          line-height: var(--a-level-1-height);
          text-decoration: none;
        }

        .sub-arrow {
          /*width:26px;*/
          /*outline: 1px solid darkred;*/
          transition: transform var(--time-short);
          &:before {
            font-size: 16px !important;
            font-weight: 600;
            font-family: var(--icon-font);
            content: ' \F0140';


          }
        }
        &.highlighted {
          .sub-arrow {
            transform: rotate(180deg);
            &:before {

              /*content:  ' \F0143';*/
              content: ' \F0140';
            }
          }
        }
      }
      > ul {
        > li {
          &.active {
            > a {
              color: var(--clr-main) !important;
            }
          }

          > a {
            /*Level 2*/
            display:block;
            padding:0 var(--gap);
            color: var(--clr-txt-navigation);
            --size: 60px;
            line-height: var(--a-level-2-height);
            height: var(--a-level-2-height);
            text-decoration:none;
            cursor: pointer;
            font-family: var(--body-font-family);
            font-size: 14px;
            transition: color var(--time-short);
            &:hover, &:focus {
              /*outline: 1px solid darkred;*/
              /*background-color: red;*/
              padding:0 var(--gap);
              color: var(--clr-txt-navigation);
              font-family: var(--body-font-family);
              font-size: 14px;
              /* font-weight: normal; */
              line-height: var(--a-level-2-height);
              text-decoration: none;
            }

          }
        }
      }
    }
  }

  @container style(--bp-md-or-more) {
    --a-level-1-height: 75px;
    --a-level-2-height: 60px;
    /*border: 10px solid darkred;*/
    > ul {
      border: none !important;
      background-color: var(--clr-bg-header-second) !important;;
      > li {
        border: none !important;
        &.pathive {
          > a {
            color: var(--clr-main) !important;
          }
        }

        &.active {
          > a {
            color: var(--clr-main) !important;
          }
        }
        /*level 1*/
        > a {
          /*outline: 1px solid darkred;*/
          border: none !important;
          background-color: var(--clr-bg-header-second) !important;
          color: var(--clr-txt-navigation) !important;
          line-height: var(--a-level-1-height) !important;
          padding-left: var(--gap) !important;
          padding-right: var(--gap) !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          .sub-arrow {
            width:26px;
            /*outline: 1px solid green;*/
            &:before {
              font-size: 16px !important;
              font-weight: 600;
              font-family: var(--icon-font);
              /*outline: 1px solid orange;*/
              content:  ' \F0140';
            }
          }
          &.highlighted {
            .sub-arrow {
              &:before {
                /*content:  ' \F0143';*/
                content:  ' \F0140';
              }
            }
          }
          &.has-submenu {
            padding-right: calc(var(--gap) * 3) !important;
          }
          /*level 1*/
          &:hover, &:focus {
            line-height: var(--a-level-1-height) !important;
          }
          &:hover {
            /*outline: 1px solid green !important;*/
            color: var(--clr-main) !important;
          }
        }
        > ul {
          border: none !important;
          > li {
            background-color: var(--clr-bg-header-first) !important;
            border-top: none !important;
            border-bottom: 1px solid var(--clr-bg-header-second) !important;
            &.active {
              a {
                color: var(--clr-main) !important;
              }
            }
            /*level 2*/
            > a {
              &:hover, &:focus {
                background-color: var(--clr-bg-header-first) !important;
              }
              &:hover {
                /*background-color: #000000;*/
                color: var(--clr-main);
              }
            }
          }
        }
      }
    }
  }
}
</style>
