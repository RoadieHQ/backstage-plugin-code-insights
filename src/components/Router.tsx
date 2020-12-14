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
import { Route, Routes } from 'react-router';
import { rootRouteRef } from '../plugin';
import InsightsPage from './InsightsPage';
import { GITHUB_INSIGHTS_ANNOTATION } from '../hooks/useProjectName';
import { MissingAnnotationEmptyState } from '@backstage/core';

export const isPluginApplicableToEntity = (entity: Entity) =>
  entity?.metadata.annotations?.[GITHUB_INSIGHTS_ANNOTATION];

export const Router = ({ entity }: { entity: Entity }) =>
  !isPluginApplicableToEntity(entity) ? (
    <MissingAnnotationEmptyState annotation={GITHUB_INSIGHTS_ANNOTATION} />
  ) : (
    <Routes>
      <Route
        path={`/${rootRouteRef.path}`}
        element={<InsightsPage entity={entity} />}
      />
    </Routes>
  );
