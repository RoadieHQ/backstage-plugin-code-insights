/*
 * Copyright 2020 RoadieHQ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Entity } from '@backstage/catalog-model';
import { useEntity } from '@backstage/plugin-catalog-react';
import { Route } from 'react-router';
import { FlatRoutes } from '@backstage/core-app-api';
import InsightsPage from './InsightsPage';
import { GITHUB_INSIGHTS_ANNOTATION } from '../hooks/useProjectName';
import { MissingAnnotationEmptyState } from '@backstage/core-components';

export const isGithubInsightsAvailable = (entity: Entity) =>
  Boolean(entity?.metadata.annotations?.[GITHUB_INSIGHTS_ANNOTATION]);

type Props = {
  /** @deprecated The entity is now grabbed from context instead */
  entity?: Entity;
};

export const Router = (_props: Props) =>{
  const { entity } = useEntity();
  return   !isGithubInsightsAvailable(entity) ? (
      <MissingAnnotationEmptyState annotation={GITHUB_INSIGHTS_ANNOTATION} />
  ) : (
      <FlatRoutes>
        <Route path="/" element={<InsightsPage entity={entity} />} />
      </FlatRoutes>
  );

}
