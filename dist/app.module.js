"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const feed_entity_1 = require("./feed.entity");
const feed_service_1 = require("./feed.service");
const feed_controller_1 = require("./feed.controller");
const comment_entity_1 = require("./comment.entity");
const comment_service_1 = require("./comment.service");
const comment_controller_1 = require("./comment.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'aws-1-ap-northeast-2.pooler.supabase.com',
                port: 6543,
                username: 'postgres.hupfyvybmqsymdjhpgld',
                password: process.env.DB_PASSWORD,
                database: 'postgres',
                entities: [feed_entity_1.Feed, comment_entity_1.Comment],
                synchronize: true,
                ssl: { rejectUnauthorized: false },
            }),
            typeorm_1.TypeOrmModule.forFeature([feed_entity_1.Feed, comment_entity_1.Comment]),
        ],
        controllers: [app_controller_1.AppController, feed_controller_1.FeedController, comment_controller_1.CommentController],
        providers: [app_service_1.AppService, feed_service_1.FeedService, comment_service_1.CommentService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map