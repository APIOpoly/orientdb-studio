import {DBService, GraphService, SchemaService, CommandService, TeleporterService,
        NotificationService, EtlService, AgentService, ProfilerService, Neo4jImporterService} from './core/services';
import {FormatArrayPipe, FormatErrorPipe, ObjectKeysPipe} from './core/pipes';

const APP_PIPES = [
  FormatArrayPipe,
  FormatErrorPipe,
  ObjectKeysPipe
]

const APP_SERVICES = [
  DBService,
  GraphService,
  SchemaService,
  CommandService,
  TeleporterService,
  EtlService,
  NotificationService,
  AgentService,
  ProfilerService,
  Neo4jImporterService,
  GraphService
]


export const APP_RESOLVER_PROVIDERS = [
  ...APP_SERVICES,
  ...APP_PIPES
];
