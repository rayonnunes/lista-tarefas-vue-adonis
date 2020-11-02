'use strict'

const { validate } = use('Validator')
const Database = use('Database')
const Task = use('App/Models/Task')

const requestData = [
  'title',
  'deadline_date',
  'deadline_time'
]

const schema = {
  title: 'required',
  deadline_date: 'required',
  deadline_time: 'required'
}

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const tasks = await Task.all()
    response.status(200).send(tasks)
  }

  /**
   * Render a form to be used for creating a new task.
   * GET tasks/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new task.
   * POST tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(requestData)
    const validation = await validate(data, schema)
    if (validation.fails()) {
      return response.status(400).send(validation.messages())
    }
    const trx = await Database.beginTransaction()
    await Task.create(data, trx)
    await trx.commit()
    await trx.rollback()
    const tasks = await Task.all()
    response.status(201).send(tasks)
  }

  /**
   * Display a single task.
   * GET tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const task = await Task.query()
      .where('id', params.id)
      .fetch()
    response.status(200).send(task)
  }

  /**
   * Render a form to update an existing task.
   * GET tasks/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const task = await Task.findOrFail(params.id)
    const data = request.only(requestData)
    const trx = await Database.beginTransaction()
    task.merge(data)
    await task.save(trx)
    trx.commit()
    trx.rollback()
    const tasks = await Task.all()
    response.status(202).send(tasks)
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const task = await Task.findOrFail(params.id)

    const trx = await Database.beginTransaction()
    await task.delete(trx)
    trx.commit()
    trx.rollback()
    const tasks = await Task.all()
    response.status(202).send(tasks)
  }
}

module.exports = TaskController
