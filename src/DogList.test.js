import Router from "react-router";
Router.useParams = jest.fn();
import DogList from './DogList';

import { render, screen, waitFor } from '@testing-library/react';

