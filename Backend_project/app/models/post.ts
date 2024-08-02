import { DateTime } from 'luxon'
import { BaseModel, column , belongsTo } from '@adonisjs/lucid/orm'
import type{ BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  public user_id:number

   @column()
  public title: string ;

  @column()
  public image: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


 @belongsTo(() => User, {
  foreignKey: 'user_id',
})
public user: BelongsTo<typeof User>
}