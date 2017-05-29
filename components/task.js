import Ractive from 'ractive';
import TaskLisTpl from '../templates/task-card-tpl.html';
import TaskCardTPl from '../templates/task.html';
import TaskDetailModalTpl from '../templates/task-detail.html';
import { Actions } from '../store';

const TaskDetail = Ractive.extend({
    isolated: true,
    template: TaskDetailModalTpl,
    onrender: function() {
        console.log('detail modal have been rendered ');
        this.on({
            hideModal() {
                console.log('hide modal have been called ');
                const { hideTaskDetail } = this.get();
                hideTaskDetail();
            }
        });
    }
});

const TaskCard = Ractive.extend({
    isolated: true,
    template: TaskCardTPl,
    onrender: function() {
        this.on({
            openTask(e) {
                const { showTask, task: { id } } = this.get();
                showTask(id);
            }
        });
    }
});

const Tasks = Ractive.extend({
    isolated: true,
    template: TaskLisTpl,
    components: {
        TaskCard,
        TaskDetail
    },
    onrender() {
        const { dispatcher } = this.get();

        dispatcher(Actions.addTask({
            title: 'new todo'
        }));

        this.set({
            showTask(id) {
                dispatcher(Actions.showTaskDetail(id));
            },

            hideTaskDetail() {
                dispatcher(Actions.hideTaskDetail());
            }
        });

        this.on({
            addTask(e) {
                dispatcher(Actions.addTask({
                    title: 'new todo'
                }));
            }
        });
    }
});

export default Tasks;
