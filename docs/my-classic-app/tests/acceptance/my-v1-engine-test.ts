import { visit } from '@ember/test-helpers';
import {
  selectLocale,
  setupApplicationTest,
} from 'my-classic-app/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | my-v1-engine', function (hooks) {
  setupApplicationTest(hooks);

  module('de-de', function () {
    test('We can visit the page', async function (assert) {
      await visit('/my-v1-engine');
      await selectLocale('de-de');

      assert
        .dom('[data-test-output="Title"]')
        .hasText('Willkommen bei my-v1-engine');

      assert
        .dom('[data-test-output="Engine"]')
        .hasText('Dies ist eine Komponente aus einer Engine.');

      assert
        .dom('[data-test-output="Key to Overwrite"]')
        .hasText('Die Apps Übersetzungen haben Vorrang.');
    });
  });

  module('en-us', function () {
    test('We can visit the page', async function (assert) {
      await visit('/my-v1-engine');
      await selectLocale('en-us');

      assert
        .dom('[data-test-output="Title"]')
        .hasText('Welcome to my-v1-engine');

      assert
        .dom('[data-test-output="Engine"]')
        .hasText('This is a component from an engine.');

      assert
        .dom('[data-test-output="Key to Overwrite"]')
        .hasText("The app's translations take precedence.");
    });
  });
});
